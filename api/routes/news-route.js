const express = require('express');
const mssql = require('mssql');
const isAuthorized = require('../middleware/authorization');
const { v4: uuidv4 } = require('uuid');
const News = require('../news');

function newsRoute() {
  const router = express.Router();
  // Fetches all news
  router.get('/news/toate', async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `SELECT * FROM News`;
      const result = await request.query(query);

      res.type('application/json').status(200).json({
        news: result.recordset
      })
    } catch (err) {
      console.log(`Failed to fetch news - ${err}`);
    }
  });

  // Fetches one article
  router.get("/news/article/:newsId", async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `SELECT * FROM News WHERE Id LIKE '${req.params.newsId}'`;
      const result = await request.query(query);

      res.status(200).json({
        news: result.recordset
      });
    } catch (err) {
      console.log(`Failed to fetch article ${req.params.newsId} - ${err}`);
    }
  });

  // Fetches news from a specified category
  router.get('/news/:category', async (req, res) => {
    try {
      let category = req.params.category;
      category = category.replace(category.charAt(0), category.charAt(0).toUpperCase());
      const request = new mssql.Request();
      const query = `
        SELECT N.*
        FROM News N, Categories C
        WHERE N.Id LIKE C.NewsId AND C.Category LIKE '${category}'
      `;
      const result = await request.query(query);
      res.status(200).json({
        news: result.recordset
      });

    } catch (err) {
      console.log(`Failed to fetch news for category ${req.params.category} - ${err}`);
    }
  });

  router.post('/news', isAuthorized, async (req, res) => {
    try {
      const news = new News(req.body);
      news.setId(uuidv4());
      const data = news.getIdTitleContent();
      const categories = news.getCategories();
      const tags = news.getTags();
      const request = new mssql.Request();

      if (categories.length === 0) {
        return res.type('application/json').status(400).json({
          message: 'Articolul trebuie sa faca parte din cel putin o categorie.'
        })
      }

      if (data.title.trim().length === 0) {
        return res.type('application/json').status(400).json({
          message: 'Articolul trebuie sa contina un titlu.'
        })
      }

      if (data.content.trim().length === 0) {
        return res.type('application/json').status(400).json({
          message: 'Articolul trebuie sa aiba continut.'
        })
      }
      // Insert id, title and the content into the News table
      let query = `INSERT INTO News VALUES ('${news.getId()}', '${data.title}', '${data.content}');`
      await request.query(query);
      // Insert tags, tags and links should have the same length since every link coresponds to a tag
      if (tags.length > 0) {
        for (let i = 0; i < tags.length; i++) {
          query = `INSERT INTO Tags VALUES ('${news.getId()}', '${tags[i].tag}', '${tags[i].link}');`
          await request.query(query);
        }
      }
      // Add categories into the categories table
      for (const category of categories) {
        query = `INSERT INTO Categories VALUES ('${news.getId()}', '${category}');`
        await request.query(query);
      }

      query = `SELECT * FROM News WHERE Id LIKE '${news.getId()}';`;
      const result = await request.query(query);
      res.type('application/json').status(200).json({
        message: 'Anuntul a fost adaugat cu succes',
        article: result.recordset
      });
    } catch (err) {
      console.log(`Failed to create news - ${err}`);
    }
  });

  router.delete('/news/:id', isAuthorized, async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `DELETE FROM News WHERE Id LIKE '${req.params.id}'`;
      await request.query(query);

      res.type('application/json').json({
        message: 'Anuntul a fost sters cu succes'
      })
    } catch (err) {
      console.log(`Failed to delete news record - ${err}`)
    }
  });

  router.put('/news/:id', isAuthorized, async (req, res) => {
    try {
      const news = new News(req.body);
      const request = new mssql.Request();
      const data = news.getIdTitleContent();
      if (data.title.trim().length === 0) {
        return res.type('application/json').status(400).json({
          message: 'Campul titlu nu poate fi gol'
        })
      }

      if (data.content.trim().length === 0) {
        return res.type('application/json').status(400).json({
          message: 'Campul continut nu poate fi gol'
        })
      }
      // Update title and the content
      let query = `
        UPDATE News 
        SET  
          Title = '${data.title}',
          Content = '${data.content}'
        WHERE Id LIKE '${req.params.id}'
        `;

      await request.query(query);

      res.type('application/json').status(200).json({
        message: 'Anuntul a fost actualizat cu succes'
      })

    } catch (err) {
      console.log(`Failed to update news record - ${err}`);
    }
  });

  return router;
}

module.exports = newsRoute();

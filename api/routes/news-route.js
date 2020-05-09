const express = require('express');
const mssql = require('mssql');
const isAuthorized = require('../middleware/authorization');
const { v4: uuidv4 } = require('uuid');
const News = require('../news');

function newsRoute() {
  const router = express.Router();

  router.get('/news', async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `SELECT * FROM News`;
      const result = await request.query(query);

      res.json({
        news: result.recordset
      })
    } catch (err) {
      console.log(`Failed to fetch news - ${err}`);
    }
  });

  router.post('/news', isAuthorized, async (req, res) => {
    try {
      const news = new News(req.body);
      news.setId(uuidv4());
      const data = news.getIdTitleContent();
      const categories = news.getCategories();
      const tags = news.getTags();
      const links = news.getLinks();
      const request = new mssql.Request();

      if (categories.length === 0) {
        return res.status(400).json({
          message: 'Campul categorii nu poate fi gol'
        })
      }

      if (data.title.trim().length === 0) {
        return res.status(400).json({
          message: 'Campul titlu nu poate fi gol'
        })
      }

      if (data.content.trim().length === 0) {
        return res.status(400).json({
          message: 'Campul continut nu poate fi gol'
        })
      }
      // Insert id, title and the content into the News table
      let query = `INSERT INTO News VALUES ('${news.getId()}', '${data.title}', '${data.content}');`
      await request.query(query);
      // Insert tags, tags and links should have the same length since every link coresponds to a tag
      if (tags.length > 0) {
        for (let i = 0; i < tags.length; i++) {
          query = `INSERT INTO Tags VALUES ('${news.getId()}', '${tags[i]}', '${links[i]}');`
          await request.query(query);
        }
      }
      // Add categories into the categories table
      for (const category of categories) {
        query = `INSERT INTO Categories VALUES ('${news.getId()}', '${category}')`
        await request.query(query);
      }
      res.status(200).json({
        message: 'Successfully added data',
        data,
        tags,
        links,
        categories
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

      res.json({
        message: 'Successfully deleted news record'
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
        return res.status(400).json({
          message: 'Campul titlu nu poate fi gol'
        })
      }

      if (data.content.trim().length === 0) {
        return res.status(400).json({
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

      res.status(200).json({
        message: 'Successfully updated news record'
      })

    } catch (err) {
      console.log(`Failed to update news record - ${err}`);
    }
  });

  return router;
}

module.exports = newsRoute();

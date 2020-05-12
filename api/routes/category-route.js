const express = require('express');
const mssql = require('mssql');
const isAuthorized = require('../middleware/authorization');

function categoryRoutes() {
  const router = express.Router();
  // Fetch categories for an article
  router.get("/news/:newsId/categories/", async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `SELECT * FROM Categories WHERE NewsId LIKE '${req.params.newsId}'`
      const result = await request.query(query);

      res.type('application/json').status(200).json({
        message: 'Successfully fetched categories',
        categories: result.recordset
      })
    } catch (err) {
      console.log(`Failed to fetch categories for ${req.params.newsId} - ${err}`);
    }
  });

  // Fetches available categories
  router.get("/categories", async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = 'SELECT DISTINCT C.Category FROM Categories C';
      const result = await request.query(query);

      res.status(200).json({
        categories: result.recordset
      });
    } catch (err) {
      console.log(`Failed to fetch categories - ${err}`);
    }
  });

  // Adds a category to an article
  router.post("/news/categories/", isAuthorized, async (req, res) => {
    try {
      let category = req.body.category.trim().toLowerCase();
      category = category.replace(category.charAt(0), category.charAt(0).toUpperCase());
      if (category.length === 0) {
        return res.type('application/json').status(400).json({
          message: 'Campul categorie nu poate fi gol'
        });
      }

      // Validate category
      if (category === 'Stiri' || category === 'Evenimente' || category === 'Oferte') {
        const request = new mssql.Request();
        // Check if the category already exists
        let query = `SELECT C.Category FROM Categories C WHERE NewsId LIKE '${req.body.newsId}'`;
        const result = await request.query(query);
        const foundCategory = result.recordset.find(record => record.Category === category);

        if (foundCategory !== undefined) {
          return res.type('application/json').status(409).json({
            message: 'Categoria se afla deja in lista'
          })
        } else {
          query = `INSERT INTO Categories VALUES ('${req.body.newsId}', '${category}')`;
          await request.query(query);

          query = `SELECT TOP 1 * FROM Categories ORDER BY Id DESC`;
          const result = await request.query(query);

          return res.type('application/json').json({
            message: 'Successfully added category',
            category: result.recordset
          })
        }

      } else {
        res.type('application/json').status(400).json({
          message: 'Categorie invalida.'
        });
      }

    } catch (err) {
      console.log(`Failed to post category - ${err}`);
    }
  });

  // Deletes a catgory from an article
  router.delete("/news/:newsId/categories/:categoryId", isAuthorized, async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `
        DELETE FROM Categories 
        WHERE NewsId LIKE '${req.params.newsId}' AND Id = ${req.params.categoryId}`;
      await request.query(query);

      res.type('application/json').status(200).json({
        message: 'Categorie stearsa cu succes'
      })
    } catch (err) {
      console.log(`Failed to delete category - ${err}`);
    }
  });
  return router;
}

module.exports = categoryRoutes();
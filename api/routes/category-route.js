const express = require('express');
const mssql = require('mssql');
const isAuthorized = require('../middleware/authorization');

function categoryRoutes() {
  const router = express.Router();

  router.get("/news/:newsId/categories/", async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `SELECT * FROM Categories WHERE NewsId LIKE '${req.params.newsId}'`
      const result = await request.query(query);

      res.status(200).json({
        message: 'Successfully fetched categories',
        categories: result.recordset
      })
    } catch (err) {
      console.log(`Failed to fetch categories for ${req.params.newsId} - ${err}`);
    }
  });

  router.post("/news/categories/", isAuthorized, async (req, res) => {
    try {
      let category = req.body.category.trim().toLowerCase();
      category = category.replace(category.charAt(0), category.charAt(0).toUpperCase());
      if (category.length === 0) {
        return res.status(400).json({
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
          return res.status(409).json({
            message: 'Categoria se afla deja in lista'
          })
        } else {
          query = `INSERT INTO Categories VALUES ('${req.body.newsId}', '${category}')`;
          await request.query(query);
          return res.json({
            message: 'Successfully added category'
          })
        }

      } else {
        res.status(400).json({
          message: 'Categorie invalida.'
        });
      }

    } catch (err) {
      console.log(`Failed to post category - ${err}`);
      console.log(err);
    }
  });

  router.delete("/news/:newsId/categories/:categoryId", isAuthorized, async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `
        DELETE FROM Categories 
        WHERE NewsId LIKE '${req.params.newsId}' AND Id = ${req.params.categoryId}`;
      await request.query(query);

      res.status(200).json({
        message: 'Categorie stearsa cu succes'
      })
    } catch (err) {
      console.log(`Failed to delete category - ${err}`);
    }
  });
  return router;
}

module.exports = categoryRoutes();
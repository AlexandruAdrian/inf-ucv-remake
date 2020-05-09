const express = require('express');
const mssql = require('mssql');
const isAuthorized = require('../middleware/authorization');

function tagRoutes() {
  const router = express.Router();

  router.get("/news/:newsId/tags", async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `SELECT * FROM Tags WHERE NewsId LIKE '${req.params.newsId}'`;
      const result = await request.query(query);

      res.status(200).json({
        message: 'Successfully fetched tags',
        tags: result.recordset
      })
    } catch (err) {
      console.log(`Failed to get tags - ${err}`);
    }
  });

  router.post("/news/tags", isAuthorized, async (req, res) => {
    try {
      // Validate tag and link
      const tag = req.body.tag.trim();
      const link = req.body.link.trim();
      if ((tag.length > 0 && link.length < 1) || (tag.length < 1 && link.length > 0)) {
        return res.status(400).json({
          message: 'Tag-ul si Link-ul sunt corelate, fiecarui tag trebuie sa ii corespunda un link.'
        })
      }

      if (link.indexOf('http://') === -1) {
        return res.status(400).json({
          message: 'Link invalid! Asigurati-va ca link-ul incepe cu http://'
        });
      }
      // Check if the tag already exists
      const request = new mssql.Request();
      let query = `SELECT * FROM Tags WHERE NewsId LIKE '${req.body.newsId}'`;
      const result = await request.query(query);
      const tags = result.recordset;
      const foundTag = tags.find(tagRecord => tagRecord.Tag === tag);

      if (foundTag !== undefined) {
        return res.status(409).json({
          message: 'Tag-ul se afla deja in lista'
        })
      } else {
        query = `INSERT INTO Tags VALUES ('${req.body.newsId}', '${tag}', '${link}')`;
        await request.query(query);

        return res.status(200).json({
          message: 'Tag adaugat cu succes'
        });
      }

    } catch (err) {
      console.log(`Failed to add tag record - ${err}`);
    }
  });

  router.delete('/news/:newsId/tags/:tagId', isAuthorized, async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `
        DELETE FROM Tags
        WHERE NewsId LIKE '${req.params.newsId}' AND Id LIKE '${req.params.tagId}'
      `
      await request.query(query);

      res.status(200).json({
        message: 'Tag sters cu succes'
      })

    } catch (err) {
      console.log(`Failed to delete tag record - ${err}`);
    }
  });

  return router;
}

module.exports = tagRoutes();
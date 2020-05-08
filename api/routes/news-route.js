const express = require('express');
const mssql = require('mssql');
const isAuthorized = require('../middleware/authorization');
const shortId = require('shortid');
const News = require('../news');

function newsRoute() {
  const router = express.Router();

  router.get('/news', async (req, res) => {
    try {
      const request = new mssql.Request();
      const query = `SELECT * FROM News`;
      const result = await request.query(query);
      const newsArray = [];

      for (const record of result.recordset) {
        const news = new News(record);
        const q = `
          SELECT T.Tag, T.Link
          FROM Tags T
          WHERE T.NewsId = ${record.Id}
        `
        const res = await request.query(q);
        for (const r of res.recordset) {
          news.addTag(r.Tag);
          news.addLink(r.Link);
        }
        newsArray.push(news);
      }

      res.json({
        news: newsArray
      })
    } catch (err) {
      console.log(err);
    }
  });

  return router;
}

module.exports = newsRoute();

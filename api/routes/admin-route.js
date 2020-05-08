require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function adminRoute() {
  const router = express.Router();

  router.post('/users/login', async (req, res) => {
    try {
      // Take values from .env
      const username = process.env.ADMIN;
      const pass = process.env.PASS;
      const jwtSecret = process.env.JWT_SECRET;
      // Check if the uername is correct
      if (req.body.username !== username) {
        return res.status(401).json({
          message: 'Wrong username or password'
        });
      }

      // Check if passwords match
      let passwordMatch = bcrypt.compareSync(req.body.pass, pass);
      if (!passwordMatch) {
        return res.status(401).json({
          message: 'Wrong username or password'
        })
      }

      // If username and password match then sign a token and return it
      let token = jwt.sign({ user: username }, jwtSecret, {
        expiresIn: '28d'
      });

      return res.status(200).json({
        accessToken: token
      })
    } catch (err) {
      res.json({
        message: `Something went wrong ${err}`
      })
    }
  });

  return router;
}

module.exports = adminRoute();

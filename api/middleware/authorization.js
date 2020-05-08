require('dotenv').config();
const jwt = require('jsonwebtoken');

function isAuthorized(req, res, next) {
  const authHeader =
    req.headers['authorization'] || req.headers['Authorization'];
  const jwtSecret = process.env.JWT_SECRET;

  if (typeof authHeader === 'string') {
    let token = authHeader;
    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized access, please login'
      });
    }

    token = token.substr('Bearer '.length);
    let decoded = jwt.decode(token);
    if (!decoded) {
      return res.status(401).json({
        message: 'Unauthorized access, please login'
      })
    }

    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({
          message: 'Unauthorized access, please login'
        })
      } else {
        Object.defineProperty(req, 'user', {
          value: {
            user: decodedToken.user
          }
        });

        next();
      }
    });
  } else {
    return res.status(401).json({
      message: 'Unauthorized access, please login'
    })
  }
}

module.exports = isAuthorized;
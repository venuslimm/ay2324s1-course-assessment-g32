const jwt = require('jsonwebtoken');
const env = require('./loadEnvironment');
const { getJwtToken } = require('./helpers/jwt');
const { Status } = require('./constants');

// Used by login requests
const generate = async (req, res) => {
  try {
    const userInfo = req.body;
    if (
      Object.keys(userInfo).join(',') == ['userId', 'isMaintainer'].join(',')
    ) {
      const jwtToken = getJwtToken(userInfo);
      res.json({ message: 'Generated JWT successfully', token: jwtToken });
    } else {
      return res
        .status(Status.BAD_REQUEST)
        .json({ error: 'Invalid user information provided' });
    }
  } catch (err) {
    res
      .status(err?.status || Status.BAD_REQUEST)
      .json({ error: err?.message || err });
  }
};

// Used to check if user is authorized by checking the validity of their JWT token
const authorize = async (req, res) => {
  try {
    // Extract the token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // No JWT token found
    if (token === 'undefined') {
      return res.status(401).json({ error: 'No JWT token found' });
    }

    // Verify and decode jwtToken
    jwt.verify(token, env.JWT_SECRET_KEY, (err, decodedJwtToken) => {
      if (err) {
        return res
          .status(Status.UNAUTHORIZED)
          .json({ error: 'Invalid JWT token' });
      }
      // Return userId and isMaintainer to user to use at frontend
      const userInfo = {
        userId: decodedJwtToken.userId,
        isMaintainer: decodedJwtToken.isMaintainer,
      };
      res.json({ message: 'User is authorized', userInfo: userInfo });
    });
  } catch (err) {
    res
      .status(err?.status || Status.INTERNAL_SERVER_ERROR)
      .json({ error: err?.message || err });
  }
};

// Used to check if user is an authorized maintainer by checking the validity of their JWT token and isMaintainer value
const authorizeMaintainer = async (req, res) => {
  try {
    // Extract the token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // No JWT token found
    if (token === 'undefined') {
      return res
        .status(Status.UNAUTHORIZED)
        .json({ error: 'No JWT token found' });
    }

    // Verify and decode jwtToken
    jwt.verify(token, env.JWT_SECRET_KEY, (err, decodedJwtToken) => {
      if (err) {
        return res
          .status(Status.UNAUTHORIZED)
          .json({ error: 'Invalid JWT token' });
      }

      if (!decodedJwtToken.isMaintainer) {
        return res
          .status(Status.UNAUTHORIZED)
          .json({ error: 'Not Maintainer' });
      }

      // Return userId and isMaintainer to user to use at frontend
      const userInfo = {
        userId: decodedJwtToken.userId,
        isMaintainer: decodedJwtToken.isMaintainer,
      };
      res.json({
        message: 'User is an authorized maintainer',
        userInfo: userInfo,
      });
    });
  } catch (err) {
    res
      .status(err?.status || Status.INTERNAL_SERVER_ERROR)
      .json({ error: err?.message || err });
  }
};

module.exports = {
  generate,
  authorize,
  authorizeMaintainer,
};

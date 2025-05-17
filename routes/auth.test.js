const express = require('express');
const jwt = require('jsonwebtoken');

const UserDAO = require('../daos/user');
const router = express.Router();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(authHeader);
  if (!authHeader) {
    return res.sendStatus(401);
  }
  const token = authHeader.split(' ')[1];
  // console.log(token);
  try {
    // 2:05 in lecture
    const user = jwt.verify(token, process.env.JWT_SECRET);
    // if (user) {
    req.user = user;
    next();
    // }
    // return res.sendStatus(401);
  } catch (error) {
    return res.sendStatus(401);
  }
};

router.get('/', authMiddleware, async (req, res) => {
  // console.log('this is working');
  res.status(400).send('simple route test working /auth');
  // return res.sendStatus(200);
});

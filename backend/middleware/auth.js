const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming this is your User model
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');

// console.log("thi",secretKey)


const verifyToken = (req, res, next) => {
  // console.log("",verifyToken)
  
  const token = req.header('Authorization')?.split(' ')[1];
  // console.log("thi",token)

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

const permit = (...allowedRoles) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (allowedRoles.includes(role)) {
      next();
    } else {
      res.status(403).json({ error: 'Forbidden: You do not have the necessary permissions.' });
    }
  };
};

module.exports = { verifyToken, permit };

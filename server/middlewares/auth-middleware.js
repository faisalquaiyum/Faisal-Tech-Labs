const jwt = require('jsonwebtoken');
const User = require('../models/user-model.js'); 

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized HTTP, token not provided' });
  }

  const jwtToken = token.replace('Bearer', '').trim();
  // console.log('JWT Token:', jwtToken);

  try {
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    const userData = await User.findOne({ email: decoded.email }).select({password: 0});
    console.log('User Data:', userData);

    req.user = userData; // Attach user data to the request object
    req.userId = decoded.userId; // Attach userId to the request object
    req.token = jwtToken; // Attach the token to the request object

    next(); // Call the next middleware or route handler
  } catch (error) {
    console.error('Error in auth middleware:', error.message);
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = authMiddleware;
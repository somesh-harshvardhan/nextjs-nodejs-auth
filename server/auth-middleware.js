const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(200).json({ isValidUser : false});
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(200).json({isValidUser : false});
  }
  return next();
};

module.exports = verifyToken;

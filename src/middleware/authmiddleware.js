const authService = require("../services/auth.service");
require("dotenv").config();
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) res.status(401).json({ Unauthorized: "No header!" });

  const token = authHeader.split(" ")[1];
  if (!token) res.status(401).json({ Unauthorized: "No token!" });

  try {
    const decoded = authService.verifyToken(token);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

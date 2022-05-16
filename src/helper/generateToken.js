const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./env");
module.exports = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET);
  // const token = jwt.sign(payload, "helloworld123");
  return token;
};

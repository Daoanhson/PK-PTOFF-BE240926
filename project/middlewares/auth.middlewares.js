const { registerBody } = require("../config/validate-schema");
const jwt = require("jsonwebtoken");

module.exports.validateBody = function (req, res, next) {
  let { email, password } = req.body;


  let { error } = registerBody.validate({ email, password });
  if (error) {
    res.json(error);
  } else {
    next();
  }
};

module.exports.authenticate = function (req, res, next) {
  if (!req.headers.authorization) {
    res.json({
      message: "Unauthorized !!!",
    });
  } else {
    let token = req.headers.authorization.split(" ")[1];
    try {
      let decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.json(error);
    }
  }
};

module.exports.authorize = function (roles) {
  return function (req, res, next) {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.json({
        message: "Forbidden",
      });
    }
  };
};

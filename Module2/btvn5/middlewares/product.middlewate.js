// module.exports // {}
const mysql = require("mysql2/promise");

module.exports.handleQuery = function (req, res, next) {
  let { minRate,maxRate,page,limit,sort,order } = req.query;
  console.log(minRate);
  console.log(maxRate);
  console.log(page);
  console.log(limit);
  console.log(sort);
  console.log(order);

  let baseQuery = ``


  next();
};
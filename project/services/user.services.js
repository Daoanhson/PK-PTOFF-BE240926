const db = require("../config/db");
module.exports.getAll = async () => {
  return await db("user").select("*");
};
module.exports.getOne = async (id) => {
  return await db("user").where("id", id).first();
};
module.exports.createOne = async (email, password, avatarUrl) => {
  return await db("user").insert({
    email: email,
    password: password,
    avatarUrl: avatarUrl,
  });
};

module.exports.updateOne = async(id, email, password, avatarUrl) => {
  return await db("user")
  .where("id", id)
  .update({
    email: email,
    password: password,
    avatarUrl: avatarUrl,
  });
};

module.exports.deleteOne = async(id) => {
  return await db("user")
  .where("id", id)
  .del();
};

const userService = require("../services/user.services");

module.exports.getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách người dùng." });
  }
};
module.exports.getOne = async (req, res) => {
  let { id } = req.params;
  let result = await userService.getOne(id);
  res.json(result);
};
module.exports.createOne = async (req, res) => {
  let { email, password } = req.body;
  let { fileName } = req;
  try {
    let result = await userService.createOne(email, password, fileName);
    console.log(result);
    res.json({
      create_user_id: result[0],
      message: "POST ONE SUCCESSFULLY",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
      message: "Error occurred on server",
    });
  }
};

module.exports.updateOne = async (req, res) => {
  const { id } = req.params;
  const { email, password, avatarUrl } = req.body;
  try {
    const updatedUser = await userService.updateOne(id, email, password, avatarUrl);
    if (!updatedUser) {
      return res.status(404).json({ message: "Người dùng không tìm thấy." });
    }
    res.status(200).json({ message: "Người dùng đã được cập nhật." });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật người dùng." });
  }
};

module.exports.deleteOne = async(req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userService.deleteOne(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Người dùng không tìm thấy." });
    }
    res.status(200).json({ message: "Người dùng đã được xóa." });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa người dùng." });
  }
};

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");
const { authenticate, authorize } = require("../middlewares/auth.middlewares");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public`);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let { originalname } = file;
    originalname = originalname.split(".");
    let extension = originalname[originalname.length - 1];
    let fileName = file.fieldname + "-" + uniqueSuffix + `.${extension}`;
    cb(null, fileName);
    req.fileName = fileName;
  },
});

const mulStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public`);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let { originalname } = file;
    originalname = originalname.split(".");
    let extension = originalname[originalname.length - 1];
    let fileName = file.fieldname + "-" + uniqueSuffix + `.${extension}`;
    cb(null, fileName);
    req.fileName = fileName;
  },
});

const upload = multer({ storage });
// middleware dành cho việc upload nhiều file cùng 1 lúc
const uploadMulti = multer({ storage: mulStorage });

// authorization - phân quyền

// chỉ dành cho admin
/**
 * @openapi
 * /auth/getall:
 *   post: 
 *     description: get all user
 *     requestBody:
 *          content:
 *            application/x-www-form-urlencoded:
 *              schema:
 *                type: object
 *                properties:
 *                  email:
 *                    description: The email of the user
 *                    type: string
 *                  password:
 *                    description: The password of the user
 *                    type: string
 *                
 *     responses:
 *       201:
 *         description: Register successfully
 */
router.get("/", authenticate, authorize(["ADMIN"]), userController.getAll);

router.get(
  "/:id",
  // authenticate,
  // authorize(["ADMIN", "USER"]),
  userController.getOne
);
router.post("/", upload.single("avatar"), userController.createOne);

/**
 * @openapi
 * /auth/{id}:
 *   put:
 *     description: Cập nhật thông tin người dùng
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID người dùng cần cập nhật
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               avatarUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy người dùng
 */
router.put("/:id", userController.updateOne);


/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     description: Xóa người dùng theo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID người dùng cần xóa
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa người dùng thành công
 *       404:
 *         description: Không tìm thấy người dùng
 */
router.delete("/:id", userController.deleteOne);

module.exports = router;

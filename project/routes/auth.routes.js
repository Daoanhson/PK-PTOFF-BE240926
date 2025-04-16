const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");
const { validateBody } = require("../middlewares/auth.middlewares");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../config/swagger-config");


/**
 * @openapi
 * /auth/register:
 *   post: 
 *     description: Register a new user
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
router.post("/register", validateBody, authController.register);

/**
 * @openapi
 * /auth/sign-in:
 *   post: 
 *     description: Sign in a user
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
 *         description: Sign in successfully
 */
router.post("/sign-in", authController.signIn);

module.exports = router;

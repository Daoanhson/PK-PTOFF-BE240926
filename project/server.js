const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger-config");
dotenv.config();
const PORT = 3000;

// import routes
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(express.static("public"));

// Routes
server.use("/users", userRoutes);
server.use("/auth", authRoutes);

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
/**
 * @openapi
 * /:
 *   get:
 *     description: Introduction
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
server.get("/", (req, res) => {
  res.json({
    message: "Hello world !!!!",
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

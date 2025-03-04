const express = require("express");
const server = express();
const port = 3000;
const morgan = require("morgan");
const productRoutes = require('./routes/products.route');
const commentRoutes = require('./routes/commentRoute');
const tagRoutes = require('./routes/tagRoute');


const bodyParser = require("body-parser");

// Sử dụng một số application middlewares
server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));

// Route gốc
server.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Products API"
    });
});

// Router
server.use('/api/v1/product', productRoutes);
server.use('/api/v1/comment', commentRoutes);
server.use('/api/v1/tag', tagRoutes);



server.listen(port, () => {
    console.log("Server running on port 3000");
});
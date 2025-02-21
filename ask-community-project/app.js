const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const port = 3000;
const pageRouter = require("./router/page.router");
const questionRouter = require("./router/question.router");
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Router   
app.use("/", pageRouter);
app.use("/api/v1/questions", questionRouter);

// 404      
app.get("*", (req, res) => {
    res.send("PAGE NOT FOUND");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
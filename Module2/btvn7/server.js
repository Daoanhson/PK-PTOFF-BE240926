const express = require("express")
const server = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const jobRoutes = require('./routes/job.route');
const categoryRoutes = require('./routes/category.route');


server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true}))
server.use(morgan("dev"))

server.get("/", function(req, res){
    res.json({
        message: "Hello World",
    })
})
// Route
server.use('/api/v1/jobs', jobRoutes);
server.use('/api/v1/categories', categoryRoutes);


server.listen(3000, function(){
    console.log("Server is running on 3000")
})
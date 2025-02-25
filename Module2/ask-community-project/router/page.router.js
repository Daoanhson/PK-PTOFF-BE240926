const express = require("express");
const path = require("path");
const router = express.Router();
// Các router 
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/ask', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/ask.html'));
});

router.get('/question-detail/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/question-detail.html'));
});


module.exports = router;
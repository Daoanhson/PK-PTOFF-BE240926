const express = require("express");
const path = require("path");
const router = express.Router();
// Các router 
router.get("/", (req, res) => {
    res.json({ message: "This is homepage" });
});

router.get('/ask', (req, res) => {
    res.json({ message: "This is ask page" });
});

router.get('/question-detail/:id', (req, res) => {
    const questionId = req.params.id;
    res.send(`This is a question detail page for question ID: ${questionId}`);
});

module.exports = router;
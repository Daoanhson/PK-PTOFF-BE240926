const express = require("express");
const router = express.Router();
const fs = require("fs");
const checkExist = require("../middleware/checkExist");

// Đọc dữ liệu từ questions.json
const readQuestions = () => {
    const data = fs.readFileSync(__dirname + '/../dev-data/questions.json', 'utf-8');
    return JSON.parse(data);
};

// Ghi dữ liệu vào questions.json
const writeQuestions = (questions) => {
    fs.writeFileSync('dev-data/questions.json', JSON.stringify(questions, null, 2));
};
// Các router 
// GET /api/v1/questions
router.get('/', (req, res) => {
    const questions = readQuestions();
    res.status(200).json(questions);
});

// GET /api/v1/questions/:id
router.get('/:id',checkExist, (req, res) => {
    const questions = readQuestions();
    const question = questions.find(q => q.id == req.params.id);
    res.status(200).json(question);
});


// POST /api/v1/questions
router.post('/', checkExist, (req, res) => {
    const questions = readQuestions();
    const newQuestion = req.body;

    // Kiểm tra nếu question đã tồn tại
    const existingQuestion = questions.find(q => q.content === newQuestion.content);
    if (existingQuestion) {
        return res.status(400).json({ message: 'Question already exists' });
    }

    // Thêm mới và ghi vào file
    questions.push(newQuestion);
    writeQuestions(questions);
    res.status(201).json({ message: 'Create successfully' });
});

// PUT /api/v1/questions/:id
router.put('/:id', checkExist, (req, res) => {
    const questions = readQuestions();
    const index = questions.findIndex(q => q.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: 'Question not found' });
    }

    // Cập nhật thông tin và ghi vào file
    questions[index] = { ...questions[index], ...req.body };
    writeQuestions(questions);
    res.status(200).json({ message: 'Update successfully' });
});

// DELETE /api/v1/questions/:id
router.delete('/:id', checkExist, (req, res) => {
    const questions = readQuestions();
    const index = questions.findIndex(q => q.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: 'Question not found' });
    }

    // Xóa question và ghi vào file
    questions.splice(index, 1);
    writeQuestions(questions);
    res.status(200).json({ message: 'Delete successfully' });
});

module.exports = router;
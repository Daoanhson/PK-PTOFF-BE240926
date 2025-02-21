// Middleware checkExist
const fs = require('fs');

// Đọc dữ liệu từ questions.json
const readQuestions = () => {
    const data = fs.readFileSync('dev-data/questions.json', 'utf-8');
    return JSON.parse(data);
};

// Middleware checkExist
const checkExist = (req, res, next) => {
    const questions = readQuestions();
    const id = req.params.id;
    console.log(id)

    // check id
    if (id) {
        const question = questions.find(q => q.id == id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
    }

    // check content
    if (req.body.content) {
        const question = questions.find(q => q.content === req.body.content);
        if (question) {
            return res.status(400).json({ message: 'Question already exists' });
        }
    }

    next();
};

module.exports = checkExist;
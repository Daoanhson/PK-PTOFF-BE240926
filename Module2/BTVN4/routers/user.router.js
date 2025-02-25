const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


let pathUser = path.join(__dirname, '../dev-data/users.json')

const readUser = () => {
    const data = fs.readFileSync(findUser, 'utf-8')
    return JSON.parse(data)
}

const writeUser = (data) => {
    fs.writeFileSync(pathUser, JSON.stringify(data))
}


router.get('/users', (req, res) => { 
    const { interests, page = 1, limit = 10, sort, order = 'asc' } = req.query;

    let users = readUser();
    findUser = users

    // find user by interests
    if (interests) {
        findUser = findUser.filter(user => user.interests.includes(interests))
    }

    // Sort
    if (sort) {
        findUser.sort((a, b) => {
            if (order === 'asc') {
                return a[sort] > b[sort] ? 1 : -1;
            } else {
                return a[sort] < b[sort] ? 1 : -1;
            }
        });
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit,10)
    const paginationUsers = findUser.slice(startIndex, endIndex)

    res.status(200).json({
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        total: findUser.length,
        users: paginationUsers
    })


    // Read data form file json 


    // 
})

// 2. GET /api/v1/users/:id
router.get('/users/:id', (req, res) => {
    const users = readUser();
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});

// 3. POST /api/v1/users
router.post('/users', (req, res) => {
    const {email, name, interests} = req.body;
    const users = readUser();

    // Check user exists
    const existsUser = users.find(u => u.email === email);
    if (existsUser) {
        return res.status(400).json({ message: "User exists" });
    }

    // Create new user
    const newUser = {
        id: users.length + 1,
        email,
        name,
        interests
    };
    users.push(newUser);
    writeUser(users);
    res.status(201).json({ message: "User created" });
});

// 4. PUT /api/v1/users/:id
router.put('/users/:id', (req, res) => {
    const {email, name, interests} = req.body;
    // check user exists
    const users = readUser();
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.email = email;
    user.name = name;
    user.interests = interests;
    writeUser(users);
    res.json({ message: "User updated" });
});

// 5. DELETE /api/v1/users/:id
router.delete('/users/:id', (req, res) => {
    const users = readUser();
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    
    users.splice(userIndex, 1);
    writeUser(users);
    res.json({ message: "User deleted" });
});
module.exports = router;
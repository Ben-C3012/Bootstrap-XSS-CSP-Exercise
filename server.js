const express = require('express');
const app = express();
const cors = require('cors');

const database = [
    { name: "John", comment: "Great Website!" },
    { name: "Jane", comment: "I learned a lot from this." },
    { name: "Mike", comment: "Thanks for sharing!" },
];

// parse body
app.use(express.json());

app.use(cors(['http://localhost:5500']));

app.get('/comments', (req, res) => {
    try {
        res.json(database);
    } catch (error) {
        console.error(error);
    }
});

app.post('/add-comment', (req, res) => {
    console.log(req.body)
    try {
        const newComment = {
            name: req.body.name,
            comment: req.body.comment
        };
        database.push(newComment);
        console.log(database);
        res.json(newComment);
    } catch (error) {
        console.error(error);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
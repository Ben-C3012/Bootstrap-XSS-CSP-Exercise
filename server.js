const express = require('express');
const helmet = require('helmet');
const app = express();
const path = require('path');
const cors = require('cors');

const database = [
    { name: "John", comment: "Great Website!" },
    { name: "Jane", comment: "I learned a lot from this." },
    { name: "Mike", comment: "Thanks for sharing!" }
];

// Set Content Security Policy - Starter
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"], // Do not include 'unsafe-inline' here
        styleSrc: ["'self'"],
        imgSrc: ["'self'"],
        mediaSrc: ["'self'"], // This controls video sources
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
    }
}));

// Content Security Policy - Solution
// app.use(helmet.contentSecurityPolicy({
//     directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'",  "https://code.jquery.com" , "https://cdn.jsdelivr.net"],
//         styleSrc: ["'self'", "'unsafe-inline'" , 'https://fonts.googleapis.com' , 'https://cdn.jsdelivr.net'],
//         imgSrc: ["'self'" , 'data:' ],
//         connectSrc: ["'self'"],
//         fontSrc: ["'self'" , "https://fonts.googleapis.com" , "https://fonts.gstatic.com" , 'https://cdn.jsdelivr.net'],
//         frameSrc: ["'self'" , "https://www.youtube.com"],
//     }
// }));

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
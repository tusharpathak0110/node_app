const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const data = [];
    res.send("<h1 style='color:red'>hello world</h1>");
});
app.get('/current-time', (req, res) => {
    res.send(`<div style='color:red;text-align: center'>${new Date()}</div>`);
});

app.get('/about-me', (req, res) => {
    res.send("<h1 style='color:green'>Hello there, My name is Tushar.</h1>");
});

app.post('/users', (req, res) => {
    const users = [
        {
            firstName: 'Amit',
            lastName: 'Dubey',
            age: 28,
        },
        {
            firstName: 'tushar',
            lastName: 'pathak',
            age: 28,
        },
        {
            firstName: 'manish ',
            lastName: 'Dubey',
            age: 28,
        },
        {
            firstName: 'Yashu',
            lastName: 'Dubey',
            age: 28,
        }
    ]
    res.send(users);
});

app.listen(port, ()=> console.log(`app running on http://localhost:${port}`));



const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;

require('./db/conn');

// const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));



app.get('/', (req, res) => {
    res.send(`This is home page`);
});

app.get('/about', (req, res) => {
    res.send(`This is about page`);
});

app.get('/menu', (req, res) => {
    res.send(`This is menu page`);
});

app.get('/gallery', (req, res) => {
    res.send(`This is gallery page`);
});

app.get('/contact', (req, res) => {
    res.send(`This is contact page`);
});

app.get('/cart', (req, res) => {
    res.send(`This is cart page`);
});

app.get('/signin', (req, res) => {
    res.send(`This is signin page`);
});

app.get('/signup', (req, res) => {
    res.send(`This is signup page`);
});



app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
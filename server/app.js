const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');


dotenv.config({ path: './.env' });

const PORT = process.env.PORT;

require('./db/conn');

app.use(cors({
    // origin: true,
    origin: 'https://demo-restaurant-six.vercel.app',
    credentials: true,  // Enable credentials (cookies)
}));

app.use(express.json());

app.use(require('./router/auth'));


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
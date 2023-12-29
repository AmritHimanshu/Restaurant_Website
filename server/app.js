const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');


dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;

require('./db/conn');

// app.use(cors({ origin: true }));

app.use(cors({
    origin: 'https://demo-restaurant-six.vercel.app/',
    credentials: true,  // Enable credentials (cookies)
}));

app.use(express.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Credentials', true);
//     // ...
//     next();
// });

app.use(require('./router/auth'));


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
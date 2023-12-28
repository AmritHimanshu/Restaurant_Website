const dotenv = require('dotenv');
const express = require('express');
const app = express();
// const cors = require('cors');


dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;

require('./db/conn');

// app.use(cors({ origin: true }));

app.use(express.json());

app.use(require('./router/auth'));


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
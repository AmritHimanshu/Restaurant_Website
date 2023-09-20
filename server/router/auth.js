const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../db/conn');

const User = require('../model/userSchema');

const cookieParser = require("cookie-parser");
router.use(cookieParser());


router.post('/register', async (req, res) => {
    // USING ASYNC-AWAIT
    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Fill all the fields" });
    }

    if (password !== cpassword) return res.status(422).json({ error: "Password and Confirm Password not matched" });

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }

        const user = new User({ name, email, phone, password, cpassword });

        const userRegister = await user.save();

        if (userRegister) {
            res.status(201).json({ message: "User registered successfully" });
        }
    } catch (error) {
        console.log(error);
    }

})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) { return res.status(422).json({ error: "Fill all the fields" }); }

    try {
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const Token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", Token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (isMatch) {
                // res.status(200).json({ message: "Signin successfully" });
                res.status(200).json(userLogin)
            }
            else {
                res.status(400).json({ error: "Invalid Credentials" });
            }
        }
        else res.status(400).json({ error: "Invalid Credentials" });
    } catch (error) {
        console.log(error);
    }
})

router.get('/home', authenticate, (req, res) => {
    res.status(200).send(req.rootUser);
});

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).json({ message: 'User Logout' });
})


module.exports = router;
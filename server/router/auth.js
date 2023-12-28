const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../db/conn');

const User = require('../model/userSchema');
const Menu = require('../model/menuSchema');

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
                res.status(200).json(userLogin);
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

router.post('/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) { return res.status(422).json({ error: "Fill all the fields" }); }

    try {
        const userContact = await User.findOne({ email: email });

        if (userContact) {
            const userMessage = await userContact.addMessage(message);
            res.status(200).json({ message: "Message sent successfully" });
        }
        else {
            res.status(400).json({ error: "User not Logged in" });
        }
    } catch (error) {
        console.log(error);
    }
});

router.post('/address', authenticate, async (req, res) => {
    const { houseNumber, apartment, pincode, landmark, directions } = req.body;

    if (!houseNumber || !apartment || !pincode) { return res.status(422).json({ error: "Fill all the fields" }); }

    const address = houseNumber + ', ' + apartment + ', ' + landmark + ', ' + 'pincode - ' + pincode + ', ' + 'Direction : ' + directions;

    try {
        const addressExists = req.rootUser.addresses.some(data => data.address === address);
        if (addressExists) {
            return res.status(200).json({ message: "Address is present" });
        }
        else {
            const userAddress = await req.rootUser.addAddress(address);
            res.status(200).json({ message: "Done" });
        }
    } catch (error) {
        console.log(error);
    }
})

router.get('/', (req, res) => {
    res.status(200).json({ message: "I am from backend" });
})

router.get('/getData', authenticate, (req, res) => {
    console.log("GEt")
    res.status(200).send(req.rootUser);
});

router.get('/getMenu', async (req, res) => {
    try {
        console.log("sdfjhkjshdf")
        const menu = await Menu.find();
        res.status(200).send(menu);
    } catch (error) {
        console.log(error);
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).json({ message: 'User Logout' });
})


module.exports = router;
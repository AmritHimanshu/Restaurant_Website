const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send(`This is home page from router`);
});

// USING PROMISES
// router.post('/register', (req, res) => {
//     const { name, email, phone, password, cpassword } = req.body;

//     if (!name || !email || !phone || !password || !cpassword) {
//         return res.status(422).json({ error: "Fill all the fields" });
//     }

//     User.findOne({ email: email }).then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: "Email already Exist" });
//         }

//         const user = new User({ name, email, phone, password, cpassword });
//         user.save().then(() => {
//             res.status(201).json({ message: "User registered successfully" });
//         }).catch((err) => res.status(500).json({ error: "Failed to register" }));
//     }).catch(err => { console.log(err); });

// })

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
    
    if (!email || !password) {return res.status(422).json({ error: "Fill all the fields" });}

    try {
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();

            res.cookie("jwtoken",token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (isMatch) {
                res.status(200).json({ message: "Signin successfully" });
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


module.exports = router;
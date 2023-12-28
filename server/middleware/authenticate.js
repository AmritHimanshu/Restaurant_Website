const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const authenticate = async (req, res, next) => {
    try {
        console.log("hg")
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log("dfgjg")
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) throw new Error('User not found');
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();
    } catch (error) {
        console.log("gdgd")
        res.status(401).send("Unauthorized: No token provided");
        // console.log(error);
    }
}

module.exports = authenticate;
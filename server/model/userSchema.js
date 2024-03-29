const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    messages: [
        {
            message: {
                type: String,
                required: true
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ],
    addresses: [
        {
            address: {
                type: String,
                required: true
            }
        }
    ],
})


// Hashing the password
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// Generating Token
userSchema.methods.generateAuthToken = async function () {
    try {
        let Token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: Token });
        await this.save();
        return Token;
    } catch (error) {
        console.log(error);
    }
}

// Saving messages by the user
userSchema.methods.addMessage = async function (message) {
    try {
        this.messages = this.messages.concat({ message });
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error);
    }
}

// Saving address by the user
userSchema.methods.addAddress = async function (address) {
    try {
        this.addresses = this.addresses.concat({ address });
        await this.save();
        return this.addresses;
    } catch (error) {
        console.log(error);
    }
}


const User = mongoose.model('USER', userSchema);

module.exports = User;
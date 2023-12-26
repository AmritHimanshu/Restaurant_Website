const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    category: {
        type: String,
        require: true,
    },
    items: [
        {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
        }
    ]
})

const Menu = mongoose.model('MENU', menuSchema);

module.exports = Menu;
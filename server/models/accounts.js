const mongoose = require('mongoose')

const AccountsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const Accounts = mongoose.model("accounts", AccountsSchema)
module.exports = Accounts
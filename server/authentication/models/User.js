const mongoose = require('mongoose')
const Comments = require('../../posts/models/Comments');



const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true

    },

    email: {
        type:String,
        required:true
    },

    password: {
        type:String,
        required:true

    },

    isAdmin: {
        type:Boolean,
        default: false
    },

    date: {

        type: Date,
        immutable: true,
        default: Date.now
    }



})

module.exports = mongoose.model('User', userSchema)

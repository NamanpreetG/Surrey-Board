const mongoose = require('mongoose')
//const Comments = require('./Comments')



const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 50,

    },

    content: {
        type: String,
        required: true,
        min: 15
    },

    date: {
        type: Date,
        immutable: true,
        default: Date.now
    },

    likes: {

        type: Number,
        immutable: true,
        default: 0
    },

    society: {
        type: Number,
        required: true,
        //min: 0,
        //max: 20
        //type: mongoose.Schema.Types.ObjectId,
        //ref: "Societies"
    },

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
    }]



})



module.exports = mongoose.model('Posts', postSchema)

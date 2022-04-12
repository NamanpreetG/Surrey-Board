const mongoose = require('mongoose')
const Comments = require('./Comments')



const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 50,

    },

    content: {
        type: String,
        required: true,
        min: 5
    },

    date: {
        type: Date,
        immutable: true,
        default: Date.now
    },

    likes: {

        type: Number,
        default: 0
    },
    
    isEvent: {
        type: Boolean,
        default: false
    }
    ,

    society: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Societies"
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    

})



module.exports = mongoose.model('Posts', postSchema)

const mongoose = require('mongoose')
//const Comments = require('./Comments')



const societySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },

    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    },
        

    date: {
        type: Date,
        immutable: true,
        default: Date.now
    },

})



module.exports = mongoose.model('Societies', societySchema)

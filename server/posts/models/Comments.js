const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts",
    },

    comment: {
        type: String,
        required: true,
        min: 15
    },

    date: {
        type: Date,
        immutable: true,
        default: Date.now
    }

})



module.exports = mongoose.model('Comments', commentSchema)

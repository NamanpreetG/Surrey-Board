const mongoose = require('mongoose')
require('../../authentication/models/User')



const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
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

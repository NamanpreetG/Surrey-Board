const mongoose = require('mongoose')


const societySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    tag: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('Society', societySchema)

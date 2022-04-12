const mongoose = require('mongoose')
//const Comments = require('./Comments')



const societySchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true

    },
    name: {
        type: String,
        required: true,
    },
    //post_id: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref: "Posts"
    //},       
    desc: {
        type: String,
        required: true,    },

})



module.exports = mongoose.model('Societies', societySchema)

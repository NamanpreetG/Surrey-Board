const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        max:50,

    },

    content: {
        type:String,
        required:true,
        min:15
    },

   //date: {
        //type: Date,
        //immutable: true,
        //default: Date.now
    //},

    //likes: {

        //type: int,
        //immutable: true,
        //default: Date.now
    //}
    //society_id: {
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref: "Society",
    //},
    //user_id: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref: "User",
    //}



})



module.exports = mongoose.model('Posts', postSchema)

//require('../../authentication/models/User');
const Post = require('../models/post')
const Comments = require('../models/Comments');
const router = require('express').Router()
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true

    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    date: {

        type: Date,
        immutable: true,
        default: Date.now
    }



})

const User = mongoose.model('User', userSchema)



/**
 * SHOW COMMENTS: based on post_id
 */

router.get('/:post_id', async (req, res) => {
    try {

        const c = await Comments.
            where('post_id').equals(req.params.post_id).
            select('comment').
            select('date').
            select('user').
            populate('user')

        res.send(c)

    } catch (error) {
        res.send({ message: 'No comments found' })
    }

});


/**
 * ADD COMMENT
 */

router.post('/add', async (req, res) => {
    // Create new comment
    const new_comment = new Comments({
        post_id: req.body.post_id,
        user: req.body.user,
        comment: req.body.comment
    })

    try {
        const comment = await new_comment.save()
        console.log('comment was added');
        res.send(comment)
        console.log(comment);

    } catch (e) {
        console.log(e)
        res.send({ message: 'Error' })
    }

})

/**
 * DELETE COMMENT
 */

router.post('/delete/:id', async (req, res) => {

    try {
        const c = await Comments.
            where('_id').equals(req.params.id).
            remove()

        console.log(c)
        res.send({ message: 'Comment Deleted' }).status(200)

    } catch (error) {
        res.send({ message: 'Error deleting message' })
        console.log(error);
    }

})

module.exports = router

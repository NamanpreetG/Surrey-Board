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

////////// TEST CODE

router.get('/z', async (req, res) => {

    const comment1 = new Comments({
        post_id: '625300b7c19ba3e830c521d0',
        comment: 'THIS IS A COMMENT'
    })
    const comment2 = new Comments({
        post_id: '625300b7c19ba3e830c521d0',
        comment: 'THIS IS ANOTHER COMMENT'
    })



    const t = await Post.findOne({ _id: "625300b7c19ba3e830c521d0" }).populate('comments')
    // t.comments = '62530972e64d1489370ae6e5'
    // console.log(t)

    Post.
        findOne().
        populate('comments').
        exec(function (err, resultt) {
            if (err) return handleError(err);
            console.log('comments are: ', resultt.comments);
        });

    const t2 = await Post.find()
    res.send(t2)
});
module.exports = router

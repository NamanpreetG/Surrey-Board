const mongoose = require('mongoose')
const Post = require('../models/post')
const router = require('express').Router()

var count_val

router.post('/tempdel', async (req, res) => {

    try {
        await Post.deleteMany()

    } catch (error) {

        console.log(error);

    }


})


router.post('/trial', async (req, res) => {

    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        user: req.body.user,
        society: req.body.society,
        isEvent: req.body.isEvent,
    })
    try {
        const newPost = await post.save()
        console.log('Post Submitted')
        res.send({ post: newPost, message: 'post added' })

    } catch (e) {
        res.send({ message: 'error' })
        console.log(e)
    }
});

router.post('/', async (req, res) => {
    counter(res, (r) => {
        count_val = r
        console.log(count_val)
    })

    console.log('count_val ' + count_val)

    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        user: req.body.user,
        society: req.body.society,
        isEvent: req.body.isEvent,
        counter: count_val
    })
    try {
        const newPost = await post.save()
        console.log('Post Submitted')
        res.send({ post: newPost, message: 'post added' })

    } catch (e) {
        res.send({ message: 'Invalid Post' })
        console.log(e)
    }
});


 function counter(res, callback) {
        Post.findOne().sort('-date').populate({
        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            console.log(err);

        }
        console.log('Result is ' + result.counter)
        const countVal = result.counter ? result.counter : 0
        return callback(countVal + 1)
    })

}

router.get('/addlike/:post_id', async (req, res) => {

    try {
        const post_change = await Post.updateOne({ _id: req.params.post_id }, { $inc: { likes: 1 } })
        // post_change.acknowledged is a Boolean value
        res.send({ added: post_change.acknowledged, message: 'like added' })

    } catch (error) {
        res.send({ message: 'error' })

    }
})

// Delete post 

router.delete('/delete/:id', async (req, res) => {

    try {
        const c = await Post.
            where('_id').equals(req.params.id).
            remove()

        console.log(c)
        res.send({ message: 'Post Deleted' }).status(200)

    } catch (error) {
        res.send({ message: 'Error deleting post' })
        console.log(error);
    }

})

module.exports = router
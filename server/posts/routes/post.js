const Post = require('../models/post')
const router = require('express').Router()

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        user_id: req.body.user_id,
        society_id: req.body.society_id
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

router.get('/addlike/:post_id', async (req, res) => {

    // Get post and update the like by one
    const post_change = await Post.updateOne({ _id:  req.params.post_id }, { $inc: { likes: 1 } })
    console.log(post_change);
    res.send({ message : 'like completed'})
})

module.exports = router
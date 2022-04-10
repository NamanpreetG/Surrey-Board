const Post = require('../models/post')
const router = require('express').Router()

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
    })
    try {
        const newPost = await post.save()
        console.log('Post Submitted')
        res.send({post : newPost, message: 'post added'})

    } catch (e) {
        console.log("error")
        console.log(e)
    }
    });

    module.exports = router
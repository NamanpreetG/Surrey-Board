const Post = require('../models/post')
const Comments = require('../models/Comments')
const router = require('express').Router()

router.get('/', async (req, res) => {
    Post.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
});

module.exports = router

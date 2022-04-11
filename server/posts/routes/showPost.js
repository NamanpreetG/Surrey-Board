const Post = require('../models/post')
const Comments = require('../models/Comments')
const router = require('express').Router()

router.get('/x', async (req, res) => {
    Post.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
});

router.get('/', async (req, res) => {

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
        find().
        populate('comments').
        exec(function (err, resultt) {
            if (err) return handleError(err);
            console.log('comments are: ', resultt.comments);
        });

    const t2 = await Post.find()
    res.send(t2)
});
module.exports = router

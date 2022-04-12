const Post = require('../models/post')
//const Comments = require('../models/displayPost');
//const Society = require('../models/society');
const router = require('express').Router()

router.get('/', async (req, res) => {
    Post.find({_id: "6252108b2948d05156fcf60d"}, (err, result) => {
        if (err) {
            res.send(err)
        }
       
        res.send(result)
        //console.log(populate)
    })
});
//Post.aggregate


module.exports = router
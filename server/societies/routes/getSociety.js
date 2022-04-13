//const Post = require('../models/post')
//const Comments = require('../models/displayPost');
const Society = require('../models/society');
const router = require('express').Router()


router.get('/', async (req, res) => {
        Society.find({})
            .sort('-date')
            .exec((err, result) => {
                if (err) {
                    
                    console.log(err)
                }
                res.send(result)
                console.log(result)
            })

});


module.exports = router
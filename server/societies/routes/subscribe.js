const User = require('../models/User');
const Society = require('../models/Society');
const router = require('express').Router()

// add society_id to a user's information when subscribed

router.post('/follow', (req, res) => {
    try {
        // const add_to_user = User.findOneAndUpdate({ _id: req.body._id }, { $push : { societies : re}})


    } catch (error) {

    }

})


// remove society_id from user's information when unfollowed

router.post('/unfollow', (req, res) => {


})


module.exports = router
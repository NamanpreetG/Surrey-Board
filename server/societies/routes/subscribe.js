const User = require('../models/User');
const Society = require('../models/Society');
const router = require('express').Router()

// add society_id to a user's information when subscribed

router.post('/follow', (req, res)=>{


})


// remove society_id from user's information when unfollowed

router.post('/unfollow', (req, res)=>{


})


module.exports = router
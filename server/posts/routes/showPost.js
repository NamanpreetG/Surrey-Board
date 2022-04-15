const Post = require('../models/post')
const Comments = require('../models/Comments')
const router = require('express').Router()
const mongoose = require('mongoose')


const societySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    }
})

const Society = mongoose.model('Society', societySchema)


router.get('/next', async (req, res) => {


    var page_num = 2

    if (parseInt(req.query.page) >= 1) {

        page_num = parseInt(req.query.page) + 1
    }

    const count_val = parseInt(req.query.index)

    Post.find({ counter: { $lt: count_val } }).limit(10).sort('-counter').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ messasge: 'error' })
            //console.log(err)
        }
        else if (result.length < 10) {
            page_num = 0

        }
        //console.log('LENGTH IS : ' + result.length)

        var temp_prev = page_num
        if (page_num == 0) {
            temp_prev = req.query.page - 1
        }

        res.send({ result: result, previous: temp_prev, next: page_num })
    })
});


router.get('/previous', async (req, res) => {
    var page_num = 2

    if (parseInt(req.query.page) > 1) {

        page_num = parseInt(req.query.page) - 1

    }

    const count_val = parseInt(req.query.index)

    //console.log(req.query.page - 1)
    Post.find({ counter: { $gt: count_val } }).limit(10).sort('counter').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ message: 'error' })
        }
        res.send({ result: result.reverse(), previous: page_num - 2, next: page_num })
    })
});

// General Board
router.get('/', async (req, res) => {

    var next = 2

    Post.find({}).limit(10).sort('-counter').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ messasge: 'error' })
            //console.log(err)
        }
        else if (result.length < 10) {
            next = 0
        }
        res.send({ result: result, previous: 0, next: next })
    })
});

// Events Board
router.get('/events', async (req, res) => {

    var next = 2
    Post.find({ isEvent: true }).limit(10).populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').sort('-date').exec((err, result) => {
        if (err) {
            res.send({ message: 'error' })
        } else if (result.length < 10) {
            next = 0
        }
        res.send({ result: result, previous: 0, next: next })
    })
});

router.get('/events/next', async (req, res) => {

    var page_num = 2

    if (parseInt(req.query.page) >= 1) {

        page_num = parseInt(req.query.page) + 1
    }

    const count_val = parseInt(req.query.index)

    Post.find({ counter: { $lt: count_val }, isEvent: true }).limit(10).sort('-counter').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ message: 'error' })
        }
        else if (result.length < 10) {
            page_num = 0

        }

        var temp_prev = page_num
        if (page_num == 0) {
            temp_prev = req.query.page - 1
        }

        res.send({ result: result, previous: temp_prev, next: page_num })
    })
});

router.get('/events/previous', async (req, res) => {

    var page_num = 2

    if (parseInt(req.query.page) > 1) {

        page_num = parseInt(req.query.page) - 1

    }

    const count_val = parseInt(req.query.index)

    //console.log(req.query.page - 1)
    Post.find({ counter: { $gt: count_val }, isEvent: true }).limit(10).sort('counter').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ message: 'error' })
        }
        res.send({ result: result.reverse(), previous: page_num - 2, next: page_num })
    })
});

// Society Board
router.post('/society', async (req, res) => {

    var next = 2

    Post.find({ society: req.body.society_id })
        .sort('-date').populate({

            model: 'User',
            path: 'user',
            select: 'name isAdmin'

        })
        .populate('society')
        .exec((err, result) => {
            if (err) {
                res.send({ message: 'error' })
            }
            else if (result.length < 10) {
                next = 0
            }
            res.send({ result: result, previous: 0, next: next })
        })

});

router.post('/society/next', async (req, res) => {

    // const check_first = await Post.find({ society: req.body.society_id, counter: { $lt: count_val }})
    //    if (!check_first) return res.send({ next: 0 })

    var page_num = 2

    if (parseInt(req.query.page) >= 1) {

        page_num = parseInt(req.query.page) + 1
    }

    const count_val = parseInt(req.query.index)


    Post.find({ society: req.body.society_id, counter: { $lt: count_val } }).limit(10).sort('-counter').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ message: 'error' })
        }
        else if (result.length < 10) {
            page_num = 0

        }

        var temp_prev = page_num
        if (page_num == 0) {
            temp_prev = req.query.page - 1
        }

        res.send({ result: result, previous: temp_prev, next: page_num })
    })
});

router.post('/society/previous', async (req, res) => {

    var page_num = 2

    if (parseInt(req.query.page) > 1) {

        page_num = parseInt(req.query.page) - 1

    }

    const count_val = parseInt(req.query.index)

    //console.log(req.query.page - 1)
    Post.find({ society: req.body.society_id, counter: { $gt: count_val } }).limit(10).sort('counter').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ message: 'error' })
        }
        res.send({ result: result.reverse(), previous: page_num - 2, next: page_num })
    })
});

module.exports = router

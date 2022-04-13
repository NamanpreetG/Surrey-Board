const Post = require('../models/post')
const Comments = require('../models/Comments')
const router = require('express').Router()
const mongoose = require('mongoose')
const { response } = require('express')


const societySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    }
})

const Society = mongoose.model('Society', societySchema)


router.get('/next', async (req, res) => {

    var page_num = parseInt(req.query.page) + 1
    const count_val = parseInt(req.query.index)

    Post.find({ counter: { $lt: count_val } }).limit(10).sort('-counter').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ message: 'error' })
        }
        else if (result.length === 0) {
            page_num = null

        }
        res.send({ result: result, previous: 1 ? !req.body.previous : parseInt(req.body.previous) + 1, next: page_num })
    })
});

router.get('/previous', async (req, res) => {

    const page_num = parseInt(req.query.page) - 1 ? parseInt(req.query.page) > 0 : null
    const count_val = parseInt(req.query.index)

    Post.find({ counter: { $gt: count_val } }).limit(10).sort('counter').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ message: 'error' })
        }
        res.send({ result: result.reverse(), previous: null ? parseInt(req.body.previous) = 1 : parseInt(req.body.previous) - 1, next: page_num })
    })
});

// General Board
router.get('/', async (req, res) => {


    Post.find({}).limit(10).sort('-counter').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ message: 'error' })
        }
        res.send({ result: result, previous: null, next: 2 })
    })
});

// Events Board
router.get('/events', async (req, res) => {
    Post.find({ isEvent: true }).populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').sort('-date').exec((err, result) => {
        if (err) {
            res.send({ message: 'error' })
        }
        res.send(result)
    })
});

// Society Board
router.get('/society/:id', async (req, res) => {
    Post.find({ society: req.params.id })
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
            res.send(result)
        })

});

module.exports = router

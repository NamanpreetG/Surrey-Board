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


// TEST
router.get('/next', async (req, res) => {

    var page_num = parseInt(req.query.page) + 1
    const count_val = parseInt(req.query.index)

    Post.find({ counter: { $lt: count_val } }).limit(10).sort('-date').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ messasge: 'error' })
        }
        else if(result.length === 0){
            console.log("EMPTY")
            page_num = null
        }
        res.send({ result: result, next: page_num })
    })
});

router.get('/back', async (req, res) => {

    const page_num = parseInt(req.query.page) - 1
    const count_val = parseInt(req.query.index)

    Post.find({ counter: { $gt: count_val } }).limit(10).sort('-date').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ messasge: 'error' })
        }
        res.send({ result: result, next: page_num })
    })
});

// General Board
router.get('/', async (req, res) => {

    Post.find({}).limit(10).sort('-date').populate({

        model: 'User',
        path: 'user',
        select: 'name isAdmin'

    }).populate('society').exec((err, result) => {
        if (err) {
            res.send({ messasge: 'error' })
        }
        res.send(result)
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
            res.send({ messasge: 'error' })
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
                res.send({ messasge: 'error' })
            }
            res.send(result)
        })

});

module.exports = router

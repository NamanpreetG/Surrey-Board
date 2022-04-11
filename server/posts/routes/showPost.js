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

const User = mongoose.model('Society', societySchema)


// General Board
router.get('/', async (req, res) => {
    Post.find({}).sort('-date').populate('society').exec((err, result) => {
        if (err) {
            res.send({messasge: 'error'})
        }
        res.send(result)
    })
});

// Events Board
router.get('/events', async (req, res) => {
    Post.find({ isEvent : true }).populate('society').exec((err, result) => {
        if (err) {
            res.send({messasge: 'error'})
        }
        res.send(result)
    })
});

// Society Board
router.get('/society/:id', async (req, res) => {
    Post.find({ society : req.params.id }).exec((err, result) => {
        if (err) {
            res.send({messasge: 'error'})
        }
        res.send(result)
    })
    
});

module.exports = router

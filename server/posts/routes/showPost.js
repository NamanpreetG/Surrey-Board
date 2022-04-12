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


// TEST
router.get('/test', async (req, res) => {
    Post.collection.getIndexes().then(indexes => {
        console.log("indexes:", indexes);
        res.send(indexes)
    }).catch(console.error);
})



// General Board
router.get('/', async (req, res) => {

    const lim = req.query.lim
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

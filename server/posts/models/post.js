const mongoose = require('mongoose')
const Comments = require('./Comments')



const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 50,

    },

    content: {
        type: String,
        required: true,
        min: 5
    },

    date: {
        type: Date,
        immutable: true,
        default: Date.now
    },

    likes: {

        type: Number,
        default: 0
    },

    isEvent: {
        type: Boolean,
        default: false
    }
    ,
    society: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Society"
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    counter: {
        type: Number,
        default: 0
    }
    

})

var CounterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});
var Counter = mongoose.model('counter', CounterSchema);

postSchema.pre('save', async function (next) {
    var doc = this;
    try {
        const c = await Counter.findOneAndUpdate({}, { $inc: { seq: 1 } })
        // console.log(c.seq)
        doc.counter = c.seq
        doc.title = c.seq + 1 + ' ' + doc.title
        next()
        
    } catch (error) {
        doc.counter = 10000
        next(error)
        
    }
});

module.exports = mongoose.model('Posts', postSchema)


// .exec((error, counter) => {
//     console.log('THIS IS THE COUNTER ' + counter);
//     if (error) {
//         console.log(error)
//         return next(error);
//     }
//     doc.counter = counter.seq;
//     next();
// });

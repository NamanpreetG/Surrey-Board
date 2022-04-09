const Post = require('../models/post')
const router = require('express').Router()

router.post('/', async (req, res) => {
    //const title = req.body.title
    //const content = req.body.text

    //const createpost = new Post({ title: title, content: content});
    
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
    })


    try {
        const newPost = await post.save()
        console.log('Post Submitted')
        res.send({post : newPost, message: 'post added'})

    } catch (e) {
        console.log("error")
        console.log(e)
    }

    
    
    
    
    //try {
        //await createpost.save();
        //res.send('Inserted into posts')
    //} catch (err) {
        //console.log(err);
    //}
    });

    module.exports= router
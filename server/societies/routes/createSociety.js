//const Post = require('../models/post')
//const Comments = require('../models/displayPost');
const Society = require('../models/society');
const router = require('express').Router()


router.get('/', async (req, res) => {
        Society.find({ society_id: req.params.society_id })
            .sort('-date')
            //.populate('Societies')
            .exec((err, result) => {
                if (err) {
                    //res.send({ messasge: 'error' })
                    console.log(err)
                }
                res.send(result)
            })
    
});
    //const test1 = new Society({
        //_id: '0',
        //name: 'Football',
        //desc: 'Football Society'
    //})
    //const test2 = new Society({
        //_id: '1',
        //name: 'Rugby',
        //desc: 'Rugby Society'
    //})
    //const test3 = new Society({
        //_id: '2',
        //name: 'Badminton',
        //desc: 'Badminton Society'
    //})
    //try {
        //const newSoc1 = await test1.save()
        //console.log('Society added')
    //} catch (e) {
        //console.log("error")
        //console.log(e)
    //}
    //try {
        //const newSoc2 = await test2.save()
        //console.log('Society added')
    //} catch (e) {
        //console.log("error")
        //console.log(e)
    //}
    //try {
        //const newSoc3 = await test3.save()
        //console.log('Society added')
    //} catch (e) {
        //console.log("error")
        //console.log(e)
    //}


    //Society.find({post_id: "6252108b2948d05156fcf60d" }, (err, result) => {
        //if (err) {
            //res.send(err)
        //}
       
        //res.send(result)
        //console.log(populate)
    //})




module.exports = router
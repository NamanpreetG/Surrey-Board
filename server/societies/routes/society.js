const Society = require('../models/Society');
const User = require('../models/User');
const router = require('express').Router()



// Add new Society
router.post('/addsociety', async (req, res) => {
    try {
        const soc_name = await Society.findOne({ name: req.body.name })
        if (soc_name) return res.status(200).send({ message: 'Society already exists' })

        const soc = new Society({
            name: req.body.name,
            tag: req.body.tag
        })

        const new_soc = await soc.save()
        console.log('Society Added!')
        res.send({ post: new_soc, message: 'success' })

    } catch (e) {
        res.send({ message: 'error' })
        console.log(e)
    }

});


// Show all societies
router.get('/showall', async (req, res) => {
    try {
        const soc = await Society.find()
        res.send(soc)
    } catch (error) {
        console.log(error)
        res.send({ message: 'cant get societies' })
    }
});


// Delete a Society
router.delete('/delete/:id', async (req, res) => {

    try {

        await Society.deleteOne({ id: req.params.id })
        res.send({ message: 'deleted' })


    } catch (error) {
        console.log(error)
        res.send({ message: 'error' })
    }


})

// add society_id to a user's information when subscribed

router.post('/follow', async (req, res) => {
    try {

        const check_if_sub = await User.findOne({ _id: req.body.user_id , society: req.body.society_id})
        if (check_if_sub) return res.send({ message: 'already subscribed' })

        const add_to_user = await User.findOneAndUpdate({ _id: req.body.user_id }, { $push: { society: req.body.society_id } })
        res.send({ message: "success" })

    } catch (error) {
        console.log(error)
        res.send({ message: "error" })

    }

})

router.get('/addnewsociety', async (req, res) => {
    try {

        const check = await User.findOne({ _id: '6255ef6c6c55542b850ef889' }).select('society')
        console.log(check)
        var soc_ids = []
        check.society.forEach(element => {
            soc_ids.push(element)
            
        });

        console.log(soc_ids);

        const t = await Society.find({ society: { $nin : check}})
        console.log(t);

       

    } catch (error) {
        console.log(error)
        res.send({ message: "error" })

    }

})

router.post('/unfollow', async (req, res) => {
    try {

        const check_if_sub = await User.findOne({ _id: req.body.user_id , society: req.body.society_id})
        if (!check_if_sub) return res.send({ message: 'not subscribed' })

        const add_to_user = await User.findOneAndUpdate({ _id: req.body.user_id }, { $pull: { society: req.body.society_id } })
        res.send({ message: "success" })

    } catch (error) {
        console.log(error)
        res.send({ message: "error" })

    }

})



module.exports = router
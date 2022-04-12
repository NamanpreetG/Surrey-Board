const Society = require('../models/Society');
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




module.exports = router
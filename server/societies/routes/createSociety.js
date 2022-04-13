const Society = require('../models/society')
const router = require('express').Router()

router.post('/', async (req, res) => {

    const society = await new Society({
        name: req.body.name,
        tag: req.body.tag,
    })
    try {
        const newSociety = await society.save()
        console.log('Society added')
        res.send({ post: newSociety, message: 'Society added' })

    } catch (e) {
        res.send({ message: 'Invalid society name or tag' })
        console.log(e)
    }
});
module.exports = router
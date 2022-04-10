const router = require('express').Router()
const verify = require('../middleware/userToken')



router.get('/', verify, (req, res) => {
    res.json({ posts: { title: 'my first post', desc: 'random data' } })

})

module.exports = router 
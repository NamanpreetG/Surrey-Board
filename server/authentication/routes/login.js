const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotevn = require('dotenv')

dotevn.config()

router.post('/', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })

//console.log(user)
   
    // Check email
    if (!user) return res.status(200).send({message: 'Email or password is incorrect'})

    // Check Password
    const valid_password = await bcrypt.compare(req.body.password, user.password)
    if (!valid_password) return res.status(200).send({message: 'Email or password is incorrect'})
    //console.log('Logged in')

    //JWT: Create and assing
    const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.TOKEN_SECRET)
    res.header('user_token', token).send({user : user, message: 'success', token: token})

})

module.exports = router 
const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')

// Add better validation
router.post('/', async (req, res) => {

    // Check if email already exists
    const emailExists = await User.findOne({ email: req.body.email })
    if (emailExists) return res.status(200).send({message :'User with email ' + req.body.email + ' already exists'})

    // hash password
    const salt = await bcrypt.genSalt(10)
    hashed_password = await bcrypt.hash(req.body.password, salt)

    // Create a new user to add to the DB
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: hashed_password,
        society : '62581c3735013815fb9302d3'
    })

    // Check for any errors 
    try {
        const new_user = await user.save()
        console.log(new_user.email + ' added successfully')
        res.send({user : new_user, message: 'user added'})

    } catch (e) {
        console.log("CANNOT ADD USER")
        console.log(e)
    }

})

module.exports = router
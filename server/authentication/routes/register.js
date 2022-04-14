const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')

// Add better validation
router.post('/', async (req, res) => {

    // Check if email already exists
    const emailExists = await User.findOne({ email: req.body.email })
    if (emailExists) return res.status(200).send({ message: 'User with email ' + req.body.email + ' already exists' })

    // hash password
    const salt = await bcrypt.genSalt(10)
    if (req.body.password == "") return res.status(200).send({ message: 'Password must not be blank' })
    
    hashed_password = await bcrypt.hash(req.body.password, salt)
         
    
    

    // Create a new user to add to the DB
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: hashed_password
    })

    // Check for any errors 
    try {
         if (user.email === "") {
            res.status(200).send({ message: 'Email must not be blank' })
        } 
        else if (user.name === "") {
            res.status(200).send({ message: 'Username must not be blank' })
        }
        else { 
            const new_user = await user.save()
            console.log(new_user.email + ' added successfully')
            res.send({ user: new_user, message: 'user added' })
        }
    } catch (e) {
        res.status(200).send({ message: 'Email, username or password must not be blank' })
        console.log("CANNOT ADD USER")
        console.log(e)
    }

})

module.exports = router
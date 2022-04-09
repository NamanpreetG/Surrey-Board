const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

app.use(cors())


const PORT = 3005
dotenv.config()
app.use(express.json())

//const loginRoute = require('./routes/login')
//const registerRoute = require('./routes/register')
const PostRoute = require('./routes/post')


mongoose.connect(process.env.DBURUI)
    .then((res) => {
        console.log('CONNECTED TO MONGOOOOSE')
    })

//app.use('/auth/login', loginRoute)
//app.use('/auth/register', registerRoute)
app.use('/post', PostRoute)



app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})
/////////////////////////////////////////////////

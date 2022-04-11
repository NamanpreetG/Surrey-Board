const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

app.use(cors())


const PORT = 3006
dotenv.config()
app.use(express.json())

const PostRoute = require('./routes/post')
const showPostRoute = require('./routes/showPost')
const showCommentsRoute = require('./routes/comments')

mongoose.connect(process.env.DBURUI)
    .then((res) => {
        console.log('CONNECTED TO MONGOOOOSE')
    })

app.use('/post', PostRoute)
app.use('/showpost', showPostRoute)
app.use('/comments', showCommentsRoute)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})

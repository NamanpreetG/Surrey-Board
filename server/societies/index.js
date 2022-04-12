const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

app.use(cors())


const PORT = 3007
dotenv.config()
app.use(express.json())

const displayPostRoute = require('./routes/displayPost')


mongoose.connect(process.env.DBURUI)
    .then((res) => {
        console.log('CONNECTED TO MONGOOOOSE')
    })

app.use('/displaypost', displayPostRoute)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

app.use(cors())


const PORT = 3007
dotenv.config()
app.use(express.json())

mongoose.connect(process.env.DBURUI)
    .then((res) => {
        console.log('CONNECTED TO MONGOOOOSE')
    })
const createSociety = require('./routes/createSociety')
const getSociety = require('./routes/getSociety')

app.use('/createsociety', createSociety)
app.use('/society', getSociety)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})

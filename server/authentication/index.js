const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

app.use(cors())


const PORT = 3005
dotenv.config()
app.use(express.json())

const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const testPostRoute = require('./routes/testPost')


mongoose.connect(process.env.DBURUI)
    .then((res) => {
        console.log('CONNECTED TO MONGOOOOSE')
    })

app.use('/auth/login', loginRoute)
app.use('/auth/register', registerRoute)
app.use('/testpost', testPostRoute)



app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})
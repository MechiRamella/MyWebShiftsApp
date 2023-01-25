const express = require('express')
const mongoose = require('mongoose')
const client = require('./config/db.js')

const app = express()
const cors = require('cors')
require('dotenv').config()


app.use(express.json())


app.listen(process.env.PORT, () => {
    console.log('Server connected on PORT 3001')
})

/*
mongoose.connect('mongodb+srv://mywebshift:capsula1@cluster0.9m8xfpq.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(PORT,() => {console.log('Server connected on PORT 3001')})
    console.log('DB connected')
})
.catch((error) => {
    console.log(error)
})
*/

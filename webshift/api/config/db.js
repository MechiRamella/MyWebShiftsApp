//    mongodb+srv://mywebshift:capsula1@cluster0.9m8xfpq.mongodb.net/?retryWrites=true&w=majority

const mongoose= require("mongoose");
require('dotenv').config()


const client = mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log('DB Connected'))
.catch((error) => {
    console.log(error)
})
module.exports = client;


const express = require('express');
const mongoose = require('mongoose');
const client = require('./config/db.js');
const router = require("./routes");
const cookieparser = require("cookie-parser");

const app = express();
const cors = require('cors');
require('dotenv').config();

const {
    registerUser,
    allUsers,
  } = require("./controllers/user");



  app.use(
    cors({
      origin: "http://localhost:3001",
      credentials:true,
      methods:["GET", "POST", "PUT", "DELETE"],
      optionsSuccessStatus:200,
      allowedHeaders: [
        "Access-Control-Allow-Credentials",
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Origin",
        "Access-Control-Allow-Methods",
        "Origin",
        "WithCredentials",
        "X-Requested-Wwith",
        "Content-Type",
        "Accept",
        "Authorization",
        "X-HTTP-Method-Override",
        "Set-Cookie",
        "Cookie",
        "Request",
      ], 
    })
    );

app.use(express.json());
app.use("/api", router)
app.get("/allUsers", allUsers)
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
  );
app.use(cookieparser())


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

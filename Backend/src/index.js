const express = require('express');
const connectDB = require('./db/db');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send({message: "Welcome to the backend System"})
})

const port = process.env.PORT || 5000;

app.listen(port, async() => {
    console.log(`Server is running on port ${port}✅`);
    await connectDB()
    
})
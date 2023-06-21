require('dotenv').config();

const express = require('express')
const app = express();

// packages
const cors = require('cors');

// connect to db
const connectDB = require('./db/connect');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('dsa-visual test endpoint');
})

const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Listening on ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start();
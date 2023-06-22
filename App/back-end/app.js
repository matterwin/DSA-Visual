require('dotenv').config();

const express = require('express')
const app = express();

// packages
const cors = require('cors');

// database
const connectDB = require('./db/connect');

// routers
const authRouter = require('./routes/authRoutes')

// middleware

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('dsa-visual test endpoint');
})

app.use('/auth', authRouter);

const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening on ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start();
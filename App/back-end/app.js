require('dotenv').config();
require('express-async-errors');

const express = require('express')
const app = express();

// packages
const cors = require('cors');
const fileUpload = require('express-fileupload');

// database
const connectDB = require('./db/connect');

// routers
const authRouter = require('./routes/authRoutes')

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(cors());

app.use(express.json());

// actual routes
app.use('/auth', authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
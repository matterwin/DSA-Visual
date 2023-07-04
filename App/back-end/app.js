require('dotenv').config();
require('express-async-errors');

const express = require('express')
const app = express();

// packages
const cors = require('cors');
const fileUpload = require('express-fileupload');

// USE V2
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const helmet = require('helmet');
const xss = require('xss-clean');

// database
const connectDB = require('./db/connect');

// routers
const authRouter = require('./routes/authRoutes');
const livechatRouter = require('./routes/livechatRoutes')
// const livechatRouter = require('./routes/livechatRoutes');
const uploadRouter = require('./routes/uploadRoutes');

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(helmet());
app.use(cors());
app.use(xss());

app.use(express.static('../front-end/public'));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

// actual routes
app.use('/auth', authRouter);
app.use('/livechat', livechatRouter);
app.use('/upload', uploadRouter);

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
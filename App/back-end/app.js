const express = require('express')
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('dsa-visual test endpoint');
})

const port = process.env.PORT || 5000
const start = async () => {
    try {
        app.listen(port, console.log(`Listening on ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start();
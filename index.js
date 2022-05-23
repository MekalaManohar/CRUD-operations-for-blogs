const express = require("express");
const bodyParser = require('body-parser');

// create express app 
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.json());

// define root route 
app.get('/', (req, res) => {
    res.send("Hello world");
});

//import posts routes

const postRoutes = require("./src/routes/post.routes");

// create post routes 
app.use('/post', postRoutes);

// list to the port 
app.listen(port, () => {
    console.log(`Express server running at port ${port}`);
});
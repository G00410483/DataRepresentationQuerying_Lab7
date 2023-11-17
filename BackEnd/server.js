// Import the 'express' library
const express = require('express');
// Create an instance of the Express application
const app = express();
// Define the port to listen on
const port = 4000;
// Define path
const pat = require('path');

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.xgdyr4k.mongodb.net/MYDB?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Define book schema
const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String

})

// Create book model
const bookModel = mongoose.model('martins_books', bookSchema);

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
})

// Define a route for '/whatever'
app.get('/whatever', (req, res) => {
    res.send('Good Bye');
})

// Define a route with a parameter ':name'
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name); // Log the name from the URL parameter
    res.send('Hello ' + req.params.name);
})

// Define a route for '/test'
app.get('/test', (req, res) => {
    // Send a file as a response (assuming the path is correct)
    res.sendFile(__dirname + '/index.html');
})

// Define a route for '/name'
app.get('/name', (req, res) => {
    res.send("Hello " + req.query.fname + " " + req.query.lname);
})

// Define a POST route for '/name'
app.post('/name', (req, res) => {
    res.send("Hello " + req.body.fname);
})
// Define a POST route for '/api/book'
app.post('/api/book', (req, res) => {
    console.log(req.body);
    // Create a new book
    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    })
        .then(()=>{res.send("Book Created")})
        .catch(()=>{res.send("Book NOT Created")})
})

// Define a route for '/api/books'
app.get('/api/books', async(req, res) => {
    let books = await bookModel.find({});
    res.json(books); 
});

app.get('/api/book/:id', async(req,res)=>{
    console.log(req.params.id);

    let book = await bookModel.findById(req.params.id)
    res.send(book);
})

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
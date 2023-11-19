// Import the 'express' library
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the port to listen on
const port = 4000;

// Import the 'path' module
const path = require('path');  // Corrected variable name

// Import the 'cors' library for handling Cross-Origin Resource Sharing
const cors = require('cors');
app.use(cors());

// Middleware to handle CORS headers
app.use(function (req, res, next) {
    // Set necessary CORS headers to allow cross-origin requests
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Import the 'body-parser' middleware for parsing request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import and connect to MongoDB using Mongoose
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    // Connect to MongoDB Atlas cluster (replace with your own connection string)
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.xgdyr4k.mongodb.net/MYDB?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Define book schema using Mongoose
const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
});

// Create book model
const bookModel = mongoose.model('martins_books', bookSchema);

// Define a route for the root URL
app.get('/', (req, res) => {
    // Send a welcome message for the root URL
    res.send('Welcome to Data Representation & Querying');
});

// Define a route for '/whatever'
app.get('/whatever', (req, res) => {
    // Send a farewell message for the '/whatever' route
    res.send('Good Bye');
});

// Define a route with a parameter ':name'
app.get('/hello/:name', (req, res) => {
    // Log the name from the URL parameter and send a personalized greeting
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
});

// Define a route for '/test'
app.get('/test', (req, res) => {
    // Send an HTML file as a response (assuming the path is correct)
    res.sendFile(__dirname + '/index.html');
});

// Define a route for '/name'
app.get('/name', (req, res) => {
    // Send a personalized greeting using query parameters in the URL
    res.send("Hello " + req.query.fname + " " + req.query.lname);
});

// Define a POST route for '/name'
app.post('/name', (req, res) => {
    // Send a personalized greeting using the first name from the request body
    res.send("Hello " + req.body.fname);
});

// Define a POST route for '/api/book'
app.post('/api/book', (req, res) => {
    // Create a new book using data from the request body
    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    })
        .then(() => { res.send("Book Created") })
        .catch(() => { res.send("Book NOT Created") });
});

// Define a route for '/api/books'
app.get('/api/books', async (req, res) => {
    // Retrieve all books from the database and send them as JSON
    let books = await bookModel.find({});
    res.json(books);
});

// Define a route for '/api/book/:id'
app.get('/api/book/:id', async (req, res) => {
    // Log the book ID from the URL parameter, retrieve the corresponding book, and send it as a response
    console.log(req.params.id);
    let book = await bookModel.findById(req.params.id);
    res.send(book);
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

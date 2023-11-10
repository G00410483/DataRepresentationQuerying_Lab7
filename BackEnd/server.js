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
app.post('/api/book',(req, res)=>{
    console.log(req.body);
    res.send("Data Received");
})

// Define a route for '/api/books'
app.get('/api/books', (req, res) => {
    // Define an array of book data
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];

    // Respond with the book data and a message
    res.status(200).json({
        davids_books: data,
        "message": "Hello from the server"
    });
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
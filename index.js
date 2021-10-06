// requiring express
const express = require('express');

// initialize
const app = express();

// set port listen to 9000
const port = 9000;

// API / urls
app.get('/', (req, res) => {
    res.send("Test express");
});

// api routes
app.get('/api/penguins', (req, res) => {

    // return dummy data
    const cats = ["fact1", "fact2", "fact3"];

    // sending a response should be in JSON
    res.send(JSON.stringify(cats));
});

app.get('/api/bears', (req, res) => {

    const cats = ["fact11", "fact12", "fact13"];
    res.send(JSON.stringify(cats));
});

// run server on port
app.listen(port, () => {
    console.log("Listening on port", port);
});


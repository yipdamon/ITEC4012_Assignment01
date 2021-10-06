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

// run server on port
app.listen(port, () => {
    console.log("Listening on port", port);
});


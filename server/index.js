const express = require('express');
const app = express();
const port = 3000;

// db
const db = require('./db');

// Middleware
const bodyParser = require('body-parser');

// Router
const router = require('./routes.js');

// Parsing
app.use(bodyParser.urlencoded({ extended: false }))

// Use routes
app.use('/api', router);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Listening on port ${port}`));

// Require our dependencies
const http = require('http'); // dependencies from node
const path = require('path'); // dependencies from node
const express = require('express'); // dependencies from npm (package.json)
const ejs = require('ejs'); // dependencies from npm (package.json)
const bodyParser = require('body-parser');  // dependencies from npm (package.json)
const names = require('./routes/names'); // dependencies from local (/routes)
const index = require('./routes/index'); // dependencies from local (/routes)


// Initialize our app
const app = express();

//Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Add middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set our routes
app.use('/', index);
app.use('/names', names);



// Set up our server
const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);

const express = require('express');
const app = express();
const path = require('path');
// const moment = require('moment');
const members = require('./members');
const logger = require('./middleware/logger')


// Start middleware
// app.use(logger);

// The first param here sends you to your homepage of your website. 
// The next part: request, tells the server what to do when the webpage is opened. 
// The next part after that: response, sends what will be returned to the user. 
// What you are doing when you say join is you are combining the syntax and telling your cpu to grab this file in this directory. 
// app.get("/", (request, response) => {
//     // console.log(request);
//     response.sendFile(path.join(__dirname, "public", "index.html"));
// })

// Get single member
// app.get('/api/members/:id', (req, res) => {
//     res.send(req.params.user);
// })

// Gets all members 
app.get("/api/members", (req, res) => res.json(members));

// Set static folder
// Probably a better method to use, this allows you to use all files in that current directory
app.use(express.static(path.join(__dirname, 'public')))

// This is the function that will tell you if your port is up and running and where to find it. It pretty much tells you when its up and ready to be run.
app.listen(4001, () => {
    console.log('server up on port 4001');
});
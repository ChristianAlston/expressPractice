const express = require('express');
const app = express();

// The first param here sends you to your homepage of your website. 
// The next part: request, tells the server what to do when the webpage is opened. 
// The next part after that: response, sends what will be returned to the user. 
app.get("/", (request, response) => {
    // console.log(request);
    response.send("<p>hey</p>");
})

// This is the function that will tell you if your port is up and running and where to find it. It pretty much tells you when its up and ready to be run.
app.listen(3000, () => {
    console.log('server up on port 3000');
});
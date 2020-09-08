const sites = require("./Campsites_API_v1.json");
const userSites = require("./User_Campsites.json");
// create an express app
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/getCampsites", function (req, res) {
  res.send(sites["RECDATA"]);
});

app.get("/getUserCampsites", function (req, res) {
    res.send(userSites["Campsites"]);
  });

app.post('/postCampsite', (req, res) => {
    userSites["Campsites"].push({"new site added"});
    return res.send('Received a POST HTTP method');
});
   
app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});
   
app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
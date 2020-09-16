const sites = require("./Campsites_API_v1.json");
const userSites = require("./User_Campsites.json");
const FacIDObj = require("./currentFacID.json");
// create an express app
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
// use the express-static middleware
app.use(express.static("public"));
//support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// define the first route
app.get("/getCampsites", function (req, res) {
  res.send(sites["RECDATA"]);
});

app.get("/getUserCampsites", function (req, res) {
    res.send(userSites["Campsites"]);
  });

app.post('/postCampsite', (req, res) => {
    userSites["Campsites"].push(req.body);
    return res.send("JSON.stringify(req.body)");
});
   
app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});
   
app.delete('/deleteUserCampsites', (req, res) => {
    userSites["Campsites"].splice(0,userSites["Campsites"].length)
    return res.send('Received a DELETE HTTP method');
});

app.get('/getNewFacID', (req, res) => {
  FacIDObj.currentFacID = (parseInt(FacIDObj.currentFacID)+1).toString();
  return res.send(FacIDObj);
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
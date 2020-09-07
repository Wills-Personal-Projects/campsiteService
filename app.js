const sites = require("./Campsites_API_v1.json");
// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send(sites["RECDATA"])
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
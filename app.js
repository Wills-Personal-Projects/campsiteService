var express = require("express");
var app = express();
var cors = require('cors');
app.use(cors());

var campsites = require("./Campsites_API_v1.json");
let facs = campsites["RECDATA"];

var port = process.env.PORT || 8080;

app.get("/facilities", (req, res, next) => {
    res.json(facs);
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
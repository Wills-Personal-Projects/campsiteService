var express = require("express");
var app = express();
var cors = require('cors');
app.use(cors());

var campsites = require("./Campsites_API_v1.json");
let facs = campsites["RECDATA"];

app.get("/facilities", (req, res, next) => {
    res.json(facs);
});

app.listen(process.env.PORT ||3000, () => {
 console.log("Server running on port 3000");
});


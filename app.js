const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const fs = require("fs");
const members = require("./ui/members");


const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
	next();
};

// Init middleware
app.use(logger);

// Gets All Members
app.get("/api/members", (req, res) => res.json(members));

// set static folder
app.use(express.static(path.join(__dirname, "ui")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "ui/html", "index.html"));
// });

app.listen(port, () => console.log("example app listening on port ${port}."));

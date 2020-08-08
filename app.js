const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");

app.use(express.static(path.join(__dirname, "ui")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "ui/html", "index.html"));
// });

app.listen(port, () => console.log("example app listening on port ${port}."));

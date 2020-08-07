const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "ui/html", "index.html"));
});

app.listen(port, () =>
  console.log("example app listening on port ", +port, " .")
);

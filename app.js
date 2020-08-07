const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "ui", "index.html"));
});

app.listen(port, () =>
  console.log("example app listening on port ", +port, " .")
);

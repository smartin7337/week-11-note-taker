const express = require("express");
const notesDB = require("./db/db.json");
const app = express();
const port = 3001;
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

app.get("/", function (request, response) {
  response.sendFile("./public/index.html");
});

app.get("/notes", function (request, response) {
  response.sendFile("./public/notes.html");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
});

const express = require('express');
const notesDB = require('./db/db.json')
const app = express();
const port = 3001
const fs = require('fs');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));












app.listen(port, () => {
    console.log(`Listening to port ${port}.`)
})

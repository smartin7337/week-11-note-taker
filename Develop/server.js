const express = require('express');
const notesDB = require('./db/db.json')
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));
const express = require('express');
const PORT =  3001;
const app = express();
// creating port
// app.use is asking express to make routes for files in public folder 
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());





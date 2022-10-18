const path = require('path');
const db = require('../db/db.json');
const router = require('express').Router();


const fs = require('fs');

// app.get should read api notes from db.JSON and bring back all the saved notes.

// module.exports = (app) => {
    router.get('/notes', (req,res)=>{
        // res.readFile(path.join(__dirname, './db/db.json'));
        fs.readFile('../db.json').then ((data)=> res.json(JSON.parse(data)))
    });
// app.post will send all the information and sending it back.
    router.post('/api/notes', (req,res)=>{
        let db = fs.readFileSync('db/db.JSON');
        db = JSON.parse(db);
        console.log('db1', db);
        res.json(db);
        // creating body for the title and text
        const inputNote= {
            title: req.body.title,
            text: req.body.text,
        };
// db.push will push notes which is written in db.json
        db.push(inputNote);
        fs.writeFileSync('db/db.JSON', JSON.stringify(db));
        // res.JSON(db);
        console.log('db2',db);
    });

    // this will removenotes if user press delete button
    router.delete('/api/notes/:id', (req,res)=>{
        const db = JSON.parse(fs.readFileSync('db/db.json'))
        const removeNotes = db.filter(item => item.id !== req.params.id);
        fs.writeFileSync('db/db.JSON', JSON.stringify(removeNotes));
        res.JSON(removeNotes);
    })

// };
module.exports= router;




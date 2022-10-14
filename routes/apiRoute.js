const path = require('path');
const fs = require('fs');

// app.get should read api notes from db.JSON and bring back all the saved notes.

module.exports = (app) => {
    app.get('/api/notes', (req,res)=>{
        res.sendFile(path.join(__dirname, '../db/db.JSON'));
    });
// app.post will send all the information and sending it back.
    app.post('/api/notes', (req,res)=>{
        const db= fs.readFileSync('db/db.JSON');
        db = JSON.parse(db);
        res.JSON(db);
        // creating body for the title and text
        const inputNote= {
            title:req.body.title,
            text:req.body.text,
        };
// db.push will push notes which is written in db.json
        db.push(inputNote);
        fs.writeFileSync('db/db.JSON', JSON.stringify(db));
        res.JSON(db);
    });

    // this will removenotes if user press delete button
    app.delete('/api/notes/:id', (req,res)=>{
        const db = JSON.parse(fs.readFileSync('db/db.JSON'))
        const removeNotes = db.filter(item => item.id !== req.params.id);
        fs.writeFileSync('db/db.JSON', JSON.stringify(removeNotes));
        res.JSON(removeNotes);
    })

};


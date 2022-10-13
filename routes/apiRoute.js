const path = require('path');
const fs = require('fs');
const { builtinModules } = require('module');
const { brotliDecompressSync } = require('zlib');

// app.get should read api notes from db.json and bring back all the saved notes.

module.exports = (app) => {
    app.get('/api/notes', (req,res)=>{
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });
// app.post will send all the information and sending it back.
    app.post('/api/notes', (req,res)=>{
        const db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.JSON(db);
        const userNote= {
            title:req.body.title,
            text:req.body.text,
        };

        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.JSON(db);
    });

}


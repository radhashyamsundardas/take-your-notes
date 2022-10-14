const express = require('express');
const PORT =  3001;
const app = express();
const path = require('path');
// creating port
// app.use is asking express to make routes for files in public folder 
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./routes/apiRoute')(app);
// require('./routes/htmlRoute')(app);

app.listen(3001, ()=> {
    console.log(`server available at localhost${PORT}`);
})





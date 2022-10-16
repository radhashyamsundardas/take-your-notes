const express = require('express');
const apiRoutes = require('./routes/apiRoute');
const htmlRoutes = require('./routes/htmlRoute');
const app = express();
const PORT =  process.env.PORT || 3000;
// const path = require('path');




// app.use is asking express to make routes for files in public folder 

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

// creating port


app.listen(PORT, ()=> {
    console.log(`server available at localhost:${PORT}`);
})





const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;     
 
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/font-awesome/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.set("views", "./src/views");
app.set("view engine", "ejs");
 
app.get('/', (req, res)=>{
    res.render("index");
});

app.listen(port, () =>{
    console.log(`Listening to port ${port}`);
});
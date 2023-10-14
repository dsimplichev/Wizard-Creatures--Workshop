const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");

const { PORT } = require("./constants");
const routes = require("./router");

const app = express();
//Express config
app.use(express.static(path.resolve(__dirname, "./public")))
app.use(express.urlencoded({ extended: false}));

//Handlebars config
app.engine('hbs', handlebars.engine({ extname: "hbs"}));
app.set('view engine', "hbs");
app.set('views', "src/views");

//Routes
app.get("/", (req, res) =>{
    
    res.render("layouts/main");
});



app.use(routes)

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
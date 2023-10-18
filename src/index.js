const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

const { PORT, DB_URL, SECRET } = require("./constants");
const routes = require("./router");

const app = express();
//Express config
app.use(express.static(path.resolve(__dirname, "./public")))
app.use(express.urlencoded({ extended: false}));

//Handlebars config
app.engine('hbs', handlebars.engine({ extname: "hbs"}));
app.set('view engine', "hbs");
app.set('views', "src/views");

async function dbConnect() {
    await mongoose.connect(DB_URL);

}

dbConnect()
.then(() => {
    console.log("Successfully connected to the DB!");
})
.catch(err => 
console.log(`Error while connecting to the DB. Error: ${err}`)
);




app.use(routes)

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
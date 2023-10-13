const express = require("express");
const app = express();
const path = require("path")
const { PORT } = require("./constants");
const routes = require("./router");
//Express config
app.use(express.static(path.resolve(__dirname, "./public")))
app.use(express.urlencoded({ extended: false}));

//Routes
app.get("/", (req, res) =>{
    res.send("Hello, Deni")
});

app.use(routes)

app.listen(PORT, () => console.log(`Server is listening on port; ${PORT}`));
const express = require("express");
const app = express();
const { PORT } = require("./constants");

app.get("/", (req, res) =>{
    res.send("Hello, Deni")
});

app.listen(PORT, () => console.log(`Server is listening on port; ${PORT}`));
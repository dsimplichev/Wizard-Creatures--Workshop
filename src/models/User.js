const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    fisrtName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})
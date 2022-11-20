const express = require("express");

const mongoose = require("mongoose");

const app = express();


mongoose.connect('mongodb://localhost:27017/person');

const con = mongoose.connection;

con.on('open', () => {
    console.log('conected.....');
})
app.listen(9000,() => {
    console.log("Server Running");
})
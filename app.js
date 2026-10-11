require("dotenv").config();
const express = require("express");
const app = express();

console.log("We Ywz3333333333333333");

const port = process.env.PORT || 4000;
app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
})


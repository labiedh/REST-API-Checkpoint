var express = require("express");
var mongoose = require("mongoose");
var app = express();
// let UserModel = require('./models/userschema')
let UserRoutes = require('./routes/userroute')
app.use('/user',UserRoutes )
//environment variables
require('dotenv').config();
//database connection
 const url = process.env.ATLAS_URI
 mongoose.connect(url);
const connection = mongoose.connection;
connection.once('open', () => {
 console.log("Connected Database Successfully");
});
app.listen(3000,function(req,res){
 console.log("Server is started on port 3000");
});
let mongoose = require('mongoose')
let validator = require('validator')
let userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        },
    lastname:{
        type: String,
        required: true, 
    },
    age : Number,
    email:{
        type: String,
        unique: true,
        lowercase: true,
        validate: (value) => {
          return validator.isEmail(value)
        }
    } 
    
})
module.exports = mongoose.model('User', userSchema)
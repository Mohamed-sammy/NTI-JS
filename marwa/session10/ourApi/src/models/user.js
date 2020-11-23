const mongoose = require('mongoose')
const validator = require('validator');              
const User = mongoose.model('User',{
//name, password, email, age, address, phone, time
name:{
    type:String,
    trim:true,
    required:true
},
password:{
    type:String,
    required:true,
    trim:true,
    minlength:6,
    maxlength:20,
    match:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
    //match:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/,
    validate(value){
        if(value.includes('123')){
            throw new Error('week pass')
        }
    }
},
age:{
    type:Number,
   // required:true,
   default:16,
    validate(value){
        if(value<15) throw new Error('not available')
    }
},
email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    validate(value){
        //@.
        if(!validator.isEmail(value)) throw new Error('invalid')
    }
}
})
module.exports = User
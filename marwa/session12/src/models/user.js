const mongoose = require('mongoose')
const validator = require('validator');    
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const mySchema = new mongoose.Schema({
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
    maxlength:100,
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
},
tokens:[
    {
        token:{
            type:String,
            required:true
        }
    }
]
})

mySchema.methods.toJSON = function(){
   // const user = this
    const userobj =  this.toObject()
    delete userobj.password
    return userobj
}

mySchema.methods.generateToken=async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()},'NoDeCouRSe')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

mySchema.statics.findByCredintials=async function(email, pass){
    const user = await User.findOne({email}) 
    if(!user) throw new Error('cann\'t login')
    checkPass = await bcrypt.compare(pass, user.password)
    if(!checkPass) throw new Error('cann\'t login')
    return user
}

mySchema.pre('save' , async function(next){
    //hashing =>await
    user=this
    if(user.isModified('password')) user.password = await bcrypt.hash(user.password, 8)
    //user.isModified => hash user on pass update
    next()
})
const User = mongoose.model('User',mySchema)
module.exports = User
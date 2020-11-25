/*
add doctors => name, patients [] , spicailize
login, regiter, get my data (authorization)
*/
const jwt = require('jsonwebtoken');
const User = require('../models/user')
const auth = async(req, res, next)=>{
try{
    const token = req.header('Authorization').replace('bearer ','') //=> Bearer eybbbbb
    const decodedToken = jwt.verify(token,'NoDeCouRSe')
    console.log(decodedToken)
    const user = await User.findOne({_id:decodedToken._id,'tokens.token':token})
    console.log(user)
    if(!user) throw new Error()
    req.user = user
    req.token=token
    next()
}
catch(e){res.send('enta msh authorized')}
}
module.exports = auth
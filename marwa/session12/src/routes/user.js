const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/authmiddleware')
const router = new express.Router()
const multer = require('multer')
const uploadFile = multer({
    dest:'profiles',
    limits:{
        fileSize: 102400000
    },
    fileFilter(req,file,callBack){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return callBack(new Error('please insert .....'))
        }
        callBack(undefined, true)
    }
})

router.post('/user/add',async (req,res)=>{
    const user = new User(req.body)
   
    user.save().then(()=>{
        res.status(200).send({
            status:1,
            data:user
        })
    }).catch((e)=>{
        res.status(200).send({
            status:0,
            data:e
        })
    })
})

router.post('/user/profileImage',auth, uploadFile.single('file'),async(req,res)=>{
    req.user.pimages = req.file.buffer
    await req.user.save()
},(err,req,res,next)=>{
    res.send()

})
/*
/users?age=35
/users?limit=10&page=0  //skip page*limit  page = 0 0 1 10  2 20
/users?sortby=id:desc [id], [desc]
/users?sizes=[1,2,3]
 */
router.get('/users',(req,res)=>{
//res.send(req.user)
c={}
// c.options = {
//     limit:1,
//     skip:1
// }

if(req.query.limit) limit = parseInt(req.query.limit)
if(req.query.page) skip = parseInt(req.query.page)*limit
if(req.query.sortby) {

    sortby = req.query.sortby.split(':')
    // sort={ (sortby[0].toString()): sortby[1]} **** error
    sort.sortby[0] = sortby[1]

}
if(req.query.age) c.age = req.query.age
console.log(c)
  
    User.find().limit(limit).skip(skip).sort({'name':-1}).then((users)=>{
        res.status(200).send(
            {
                status:1,
                data:users
            }   
        )
    }).catch(e=>res.send(
        {
            status:0,
            data:e
        }
        ))
/*
req.user.populate({
    path:'user',options:{skip:0,limit:0, sort}}).execPopulate
})
*/

})

router.get('/users/:id',(req,res)=>{
    const userId = req.params.id
    User.findById(userId).then((user)=>{
    res.send({ status:1, data:user, err:''})
    })
    .catch(e=>{
        res.send({status:0,data:{},err:e})
    })
})

router.patch('/users/:id',async(req,res)=>{
    const data = req.body
    const keys = Object.keys(req.body) //name 
    console.log(keys)
    //['name,'pass,age,email]
    const allowed =['name','age','email']
    const isAvailable = keys.every(val=> allowed.includes(val) )
    if(!isAvailable) res.status(200).send('error')
/* x = api console.log x    x= find  update x*/
/* findth(()) */
       /*
       hazem****
       findByIdAndUpdate(req.params.id, req.body,
  })
    .then((data) => {if(!data)res.send('not found')
    res.json(data))}
    .catch((err) => res.status(400).json(err));
 */
try{
        const u =await User.findByIdAndUpdate(req.params.id,req.body,{})
        if(!u) return res.send('not found')
        res.send(u)
 
    }
    catch(e){
        res.send(e)

    }
})

router.delete('/users/:id',async(req,res)=>{
    try{
        const u =await User.findByIdAndDelete(req.params.id)
        if(!u) return res.send('not found')
        res.send(u)
    }
    catch(e){
        res.send(e)
    }
})

router.post('/login',async(req,res)=>{
    data = req.body //{emai:  , pas.....}
try{
    const myuser = await User.findByCredintials(data.name,data.password)
    const token = await myuser.generateToken()
    res.send({
        status:1,
        msg:'authenticated',
        data:{user:myuser},
        token: token
    })
}
catch(e){
res.send('unauthorized')
}
})

router.post('/logout',auth,async(req,res)=>{
    try{
        /*req.user.tokens//all user data tokeb=ns
        req.token // current token*/
        req.user.tokens = req.user.tokens.filter((singletoken)=>{
            return singletoken!= req.token
        })
        //[1,2,3,4,5]  3   5!=3 [3,2,4,5]
        await req.user.save()
        res.send('loggedout')
    }
    catch(e){
res.send(e)
    }

})
router.post('/logoutAll',auth,async(req,res)=>{
    try{
        req.user.tokens=[]
        await req.user.save()
        res.send('loggedout')
    }
    catch(e){
res.send(e)
    }
})

router.get('/me',auth,async(req,res)=>{
    res.send(req.user)
})
router.get('/me/img',auth,async(req,res)=>{

    res.set('Content-Type','image/jpg')
res.send(req.user.pimage)
})
router.delete('/me',auth,async(req,res)=>{
    try{
await req.user.remove()
res.send('removed')
    }
    catch(e){
        res.send(e)
    }
})
module.exports = router


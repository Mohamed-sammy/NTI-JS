const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.post('/user/add',(req,res)=>{
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

router.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
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

module.exports = router


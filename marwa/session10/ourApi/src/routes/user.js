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
        res.status(500).send({
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

module.exports = router


const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/authmiddleware')
const User = require('../models/user')
const router = new express.Router()

router.post('/tasks',auth,async(req,res)=>{
   // res.send(req.user._id)
//    task{
//        ...req.body,
//        owner:req.user._id
//    }
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    console.log(req.user)
    try{
        await task.save()
        res.status(200).send(task)
    }catch(e){
        res.status(500).send(e)
    }
})
router.get('/tasks/:id',auth,async(req,res)=>{
    const _id = req.params.id
    let isUser
    try{
isUser = await User.findById({_id})
console.log(isUser)
        const tasks = await Task.find({owner : _id}) //[] [kjj] tasks = []
        if(!tasks) res.send('no user found')
        res.send(tasks)
    }
    catch(e){
        res.send({isUser})
    }
})
module.exports = router
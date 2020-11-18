// const  getTasks= function(){
//     return 'tasks ....'
// }

// module.exports = getTasks


const fs = require('fs')
const addTask = function(task){
    data = readTasks()
    // task ={
    //     id,taskTitle, status
    // }
    data.push(task)
    fs.writeFileSync('myTasks.json',JSON.stringify(data))
}
const readTasks= function(){
    try{
        data = JSON.parse(fs.readFileSync('myTasks.json').toString())
    }
    catch(e){
        data = []
    }
    return data
}
const findTask= function(id){
    data = readTasks()
    mySearch =data.findIndex(ele=>{
        return ele.id == id
    })
    if(mySearch==-1) throw new Error('not found')
    return mySearch    
}
const deleteTask = function(id){
    try{
        mySearch = findTask(id)
        data.splice(mySearch,1)
        fs.writeFileSync('myTasks.json',JSON.stringify(data))    
    }
    catch(e){
        console.log(e.message)
    }
}
const editTask = function(id,obj){
    try{
        mySearch = findTask(id)
        data[mySearch]=obj
        fs.writeFileSync('myTasks.json',JSON.stringify(data))    
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports = {
    addTask, editTask, readTasks, deleteTask
}
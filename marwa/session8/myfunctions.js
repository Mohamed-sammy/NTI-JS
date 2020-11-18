// const  getTasks= function(){
//     return 'tasks ....'
// }

// module.exports = getTasks


const fs = require('fs')
const addTask = function(id, taskTitle, status){
    data = readTasks()
    task ={
        id,taskTitle, status
    }
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
    if(mySearch==-1) return
    return mySearch    
}
const deleteTask = function(id){
    mySearch = findTask(id)
    try{
        data.splice(mySearch,1)
        fs.writeFileSync('myTasks.json',JSON.stringify(data))    
    }
    catch(e){
        console.log('no data found')
    }
}
const editTask = function(id,obj){
    mySearch = findTask(id)
    try{
        data[mySearch]=obj
        fs.writeFileSync('myTasks.json',JSON.stringify(data))    
    }
    catch(e){
        console.log("no data found")
    }
}
module.exports = {
    addTask, editTask, readTasks, deleteTask
}
// const chalk = require('chalk');
// const getTasks = require('./myfunctions')
// const msg = getTasks()
// console.log(chalk.blue('Hello %s'), msg);
// const fs = require('fs')
// fs.writeFileSync('mydata.json','{"name":"a","age":22}')

/*
addtask( id,taskname, status){}
get tasks(){return tasks}
delete task(id)
edit task(id)
*/
// addTask(1,'task 1', false)
// addTask(2,'task 2', false)
// addTask(3,'task 3', false)
// addTask(4,'task 4', false)
//const tasks = require('./myfunctions')
// console.log(tasks.readTasks())

// console.log(process.argv)
// if(process.argv[2]=="read"){
//     console.log(tasks.readTasks())
// }



// tasks = require('./myfunctions')
// const yargs = require('yargs')
// yargs.command({
//     command:'addTask',
//     describre:'',
//     builder:{
//         id:{
//             describre:'',
//             demandOption:true,
//             type: 'number'
//         },
//         taskTitle:{
//             type:'string'
//         },
//         status:{ 
//             type:'boolean'
//         }
//     },
//     handler: function(argv){
//         obj ={id: argv.id, taskTitle:argv.taskTitle,status:argv.status}
//         tasks.addTask(obj)
//     }
// })
// yargs.argv



// const request = require('request')
// const url ="https://jsonplaceholder.typicode.com/posts"
// request({url, json:true},(error,{body})=>{
//     //if(error) return
//     body.forEach(element => {
//         console.log(element.userId)
//     });
// })
const https = require('https')
const url ="https://jsonplaceholder.typicode.com/posts"
const request = https.request(url, (res)=>{
    let data =""
    res.on('data',(x)=>{
        data+= x.toString()
    })
    res.on('end',() =>{
        const myres = JSON.parse(data)
        console.log(myres)
    })
})
request.on('error',(error)=>{
    console.log(error)
})

request.end()

/*
getApidata =>data=api.body
showtask --id => object 
showusertasks --id => array
*/










































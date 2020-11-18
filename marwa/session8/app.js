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



tasks = require('./myfunctions')
const { boolean } = require('yargs')
const yargs = require('yargs')
yargs.command({
    command:'addTask',
    describre:'',
    builder:{
        id:{
            describre:'',
            demandOption:true,
            type: 'number'
        },
        taskTitle:{
            type:'string'
        },
        status:{ 
            type:'boolean'
        }
    },
    handler: function(argv){
        obj ={id: argv.id, taskTitle:argv.taskTitle,status:argv.status}
        tasks.addTask(obj)
    }
})
yargs.argv



















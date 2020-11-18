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
const tasks = require('./myfunctions')

console.log(tasks.readTasks())








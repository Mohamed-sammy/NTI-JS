
// task => title - status 
// task ={
//     title :'task 1',
//     status: false
// }
// tasks.push(task)

// console.log(tasks)
//Exit EXIT ExIt  1 '1'
// 1=='1' 1==='1'
//      function showTasks(){
//         for( var i =0 ; i<tasks.lenght ; i++ ){

//           console.log( " task "+ i +':'+  task[i].title)
//     }
// }
//     showTasks()


tasks =[]
getTaskData = function(){
    taskTitle = prompt('enter your task title')
        task ={
            title: taskTitle,
            status: false,
            bal: 0
        }
    return task;
}
addTaskToArray = function(task){
    tasks.push(task)    
}
checkData = function(){
    for(;;){
        task = getTaskData()
        if(task.title=='') alert('invalid')
        if(task.title.toLowerCase() == 'exit') break
        addTaskToArray(task)
    }
}
showTasks = function() {
    tasks.forEach((task,i) => {
        // console.log(`task ${i+1} : title=>${task.title} and status => ${task.status} `)
console.log(task.bal)
    });
}
checkData()
showTasks()
function deleteTask(key){
    tasks = tasks.filter((element)=>{  
        return element.title != key
    })
}    

deleteTask('3')
console.log('result')

showTasks()
function editTask(key){
    t = tasks.findIndex((ele)=>{
        return ele.title == key
    })
    tasks[t].bal+=5 
}
editTask('1')
showTasks()
/*
client => name, account number, balance

create client =>input name, account number, balance

show client(account num)

tellerOp(){
    add =>add to balance
    draw =>subtract from balance
}

balance inquery


*/


















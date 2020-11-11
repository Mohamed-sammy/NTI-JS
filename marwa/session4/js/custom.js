//declarations
const addtaskform = document.querySelector('#addtaskform')
const taskTypes = ['type1', 'type2', 'type3'];
tasktype = document.querySelector('#tasktype')
//start up
taskTypes.forEach(element=>{
    // tasktype.innerHTML+=`<option>${element}</option>`
    op = document.createElement('option')
    op.textContent = element
    op.value = element
    tasktype.appendChild(op)
})
showAll()
//functions
function getTasksArray(){
    let tasks = [] 
    if(sessionStorage.getItem('tasks'))  
        tasks = JSON.parse(sessionStorage.getItem('tasks'))
    return tasks
}
function addTask(task){
    console.log('add')
    let tasks = getTasksArray()
    tasks.push(task)
    sessionStorage.setItem('tasks', JSON.stringify(tasks))
    addtaskform.reset();
    addtaskform.style.display ='none'
    showSingletask(task, tasks.length-1)
}
function showAll(){
    let tasks = getTasksArray()

    if(tasks.length == 0 ){
        nodata = createNodeList('div', 'no tasks',document.querySelector('body') ,'bg-success nodata')
    return
    }
    tasks.forEach((task,i)=>{
        
        showSingletask(task,i)
    })
}
function showSingletask(t, x, flag = false){
    if(!flag){
        nodata = document.querySelector('.nodata')
        if(nodata) nodata.remove()
        container = document.querySelector('#tasks')
        div = createNodeList('div','',container, (t.taskstatus) ? 'col-2 border border-danger rounded p-3 m-3 bg-success'
        :'col-2 border border-danger rounded p-3 m-3 bg-primary')    
    }
    else{
        div = document.querySelectorAll('#tasks div')[x]
        div.textContent=''
    }
    createNodeList('h3', t.tasktitle, div)
    createNodeList('h5', t.tasktype, div)
    createNodeList('h6', t.taskstatus, div)
    delbtn = createNodeList('button','delete',div,'btn btn-danger' )
    delAction(delbtn,x)
    if(t.taskstatus==false){
        editbtn = createNodeList('button','edit',div,'btn btn-warning' )
        editAction(editbtn,x)
    
    }
}
function createNodeList(elementTag, content, parentTag, classes=''){
    item = document.createElement(elementTag)
    item.textContent = content
    item.className = classes
    parentTag.appendChild(item)
    return item
}
//events
document.querySelector('#openAdd').addEventListener('click',function(e){
    addtaskform.style.display ='block'
})
addtaskform.addEventListener('submit',function(e){
    e.preventDefault()
    formdata={tasktitle:'',tasktype:'',taskstatus:''}
    formdata.tasktitle = e.target.elements.tasktitle.value
    formdata.tasktype =e.target.elements.tasktype.value
    formdata.taskstatus = e.target.elements.taskstatus.checked
    if(document.querySelector('#btnadd').textContent=='Add Task') addTask(formdata)
    else editTask(formdata)
})
function delAction(bttn, x){
    bttn.addEventListener('click',function(e){
        e.target.parentNode.remove()
        tasks = getTasksArray()
        tasks.splice(x,1)
        sessionStorage.setItem('tasks',JSON.stringify(tasks))
        console.log(x)
        if(tasks.length==0)
        nodata = createNodeList('div', 'no tasks',document.querySelector('body') ,'bg-success nodata')
    })
   

}
function editAction(bttn, x){
    bttn.addEventListener('click',function(e){
        tasks = getTasksArray()
        // tasks[x].taskstatus = true
        // e.target.parentNode.classList.add('bg-success')
        // e.target.style.display = 'none'
        addtaskform.style.display ='block'
        document.querySelector('#btnadd').textContent='edit'
        sessionStorage.setItem('edit',x)
        addtaskform.elements.tasktitle.value =  tasks[x].tasktitle 

        console.log(x)
    })
}
function editTask(formdata){
    tasks = getTasksArray()
    x =sessionStorage.getItem('edit')
    sessionStorage.removeItem('edit')
    tasks[x].tasktitle = formdata.tasktitle
    sessionStorage.setItem('tasks',JSON.stringify(tasks))
    addtaskform.style.display ='none'
    showSingletask(tasks[x], x, true)
}

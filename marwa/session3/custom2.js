// document.getElementById('x')
// document.getElementsByClassName
// document.getElementsByTagName
// pargraphs = document.querySelectorAll('p div .x')
// ind = 2
// pargraphs[2].remove()

// pargraphs.forEach((element,i) => {
//     if(i==2) {
//         console.log('removed')
//         element.remove()
//     }
//     console.log(element)
// });

// document.querySelector('p').textContent ='hi there'

// document.querySelector('#addDiv').addEventListener('click', function(e){
//     console.log(e.target)
//     e.target.textContent = 'sba7 el 5er'
//     const par = document.createElement('p')
// par.textContent = 'added'
// document.querySelector('body').insertBefore(par,document.querySelector('#addDiv'))

// })
/*
add customer => 
1 2 3
*/
if(sessionStorage.getItem('customers')){
    customers = JSON.parse(sessionStorage.getItem('customers'))
    customerStartNum = customers[customers.length-1].accNum
}
else {
    customers = []
    customerStartNum = 500921354223
}
    startBalance = 1000








    addCustomer = function(name, balance){
    accNum = customerStartNum + 1 //500921354223
    customer ={ name, balance, accNum }
    customers.push(customer)
    c = JSON.stringify(customers)
    sessionStorage.setItem('customers',c)
    alert('Customer Successfuly added')
}

showAllCustomers = function(){
    console.log('--------------------------------------------------------')
    console.log('you have ', customers.length, 'customers')
    customers.forEach(customer => {
        console.log(`customer Name: ${customer.name}
balance: ${customer.balance}
accNum: ${customer.accNum}
        `)
    });
    console.log('--------------------------------------------------------')
}

showCustomer = function(){
    serKey = prompt('enter accNum')
    try{
        customer = customers[findCustomer(serKey)]
        console.log(customer)
    
    }
    catch(e){
        console.log('user not found')
    }
}

findCustomer= function(userAccNum){
    let customerInd = customers.findIndex(element=>{
        return userAccNum == element.accNum
    })
    return customerInd
}
tellerOperations= function(){
    serKey = prompt('enter accNum')
    customer = customers[findCustomer(serKey)]
    op = prompt('what do you want add or withdraw')
    opvalue = parseInt(prompt('kam'))

    if(op=='add'){

    }
    else if(op=='withdraw'){

    }
    else{

    }
}


document.querySelector('#customerdata').addEventListener('submit',function(e){
    e.preventDefault()
    name = (e.target.elements.name.value)
    balance =(e.target.elements.balance.value)
    addCustomer(name,balance)
})

showAllCustomers()











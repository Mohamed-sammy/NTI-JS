/*
add customer => 
1 2 3
*/
if(sessionStorage.getItem('customers')){
    customers = JSON.parse(sessionStorage.getItem('customers'))

}
else customers = []
console.log(customers)
customerStartNum = 500921354223
startBalance = 1000
addCustomer = function(){
    name = prompt('enter customer name') //ahmed
    balance = parseInt(prompt('enter start balance')) //-5
    while(balance<=startBalance){
        balance = parseInt(prompt('invalid value please add a valid data'))
    } 
    accNum = customerStartNum + customers.length //500921354223
    customer ={
        name,
        balance,
        accNum
    }
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
accNum: ${accNum}
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

do{
    choice = prompt('enter what you want to do now? ')
    switch(choice){
        case '1': addCustomer(); break;
        case '2': showAllCustomers();break;
        case '3':showCustomer();break;
        default: console.log('invalid choice')
    }
}while(choice!='5')

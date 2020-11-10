if(sessionStorage.getItem('customers')){
    customers = JSON.parse(sessionStorage.getItem('customers'))
}
else customers = []
customerStartNum = 500921354223
startBalance = 1000
function renderData(){
    parent = document.querySelector('table')
    trCount = document.querySelectorAll(tr)
    if(trCount.length==1){
        if(customers.length>0){
            customers.forEach((element,i) => {
             const tr = document.createElement('tr')
             const heads = ['i', 'name','accNum', 'balance']
             //cells =>4 x name balance accNum
             heads.forEach((head,i)=>{
              td = document.createElement('td')
              if(i==0 ) td.textContent= i+1
              else td.textContent = element[head]
              tr.appendChild(td)
             })
             parent.appendChild(tr)
            });
           }
           else{
               // const x = '<td colspan="4" >no data</td>'
               const tr = document.createElement('tr')
               const td = document.createElement('td')
               td.textContent ="no data"
               // td.classList.add('class1')
               td.colSpan=4
               tr.appendChild(td)
               parent.appendChild(tr)
           }
       
    }
    else{
        
    }
}
    
addCustomer = function(name, balance){
 accNum = customerStartNum + customers.length //500921354223
 customer ={ name, balance, accNum}
 customers.push(customer)
 sessionStorage.setItem('customers',JSON.stringify(customers))
 alert('Customer Successfuly added')
}
document.querySelector('#customer-add').addEventListener('submit',function(e){
    e.preventDefault()
    name = e.target.elements.name.value
    balance = e.target.elements.balance.value
    addCustomer(name, balance)
    renderData()
})
// renderData()
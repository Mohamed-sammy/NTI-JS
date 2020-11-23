a={
    "name":"marwa",
    "pass":"fdtrgd"
}
const keys = Object.keys(a) //name 
console.log(keys)
//['name,'pass,age,email]
const allowed =['name','age','email']
const isAvailable = keys.every((val)=> allowed.includes(val))
console.log(isAvailable)

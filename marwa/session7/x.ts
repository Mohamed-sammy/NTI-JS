abstract class c{
    name : string
    age : number
    getData(){
        console.log('hello')
    }
    abstract getA();
}

class b extends c{
    hello(){
        console.log('hello')
    }
    getA(){
        
    }
}

let a = new b
a.hello()
a.getData()

//let x = new c
interface me{
    name:string
    age:number
    getData()
}
interface me1{
    name:string
    age:number
    getData()
}
let marwa:me
marwa ={
    name:'ahmed',
    age:30,
    getData:function(){} 
}
let z:c
z={
    name:'ahmed',
    age:30,
    getData:function(){},
    getA:function(){}
}
class ayhaga extends b implements me, me1{
    name:string
    age:number
getData(){
    console.log('hi')
}
}
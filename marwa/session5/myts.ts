// var x:string;x="marwa";console.log(x);

// 5||0?console.log('a'):console.log('b');
// 0||0
// !1
// 0101 0111
// 0111
/* string number null undefined any boolean */

// let sentence : string
// sentence = `hello
// all
// `;
// let hexa:number = 0x01001 //hexa
// let bina : number = 0b0110 //binary
// let octa : number = 0o10000 //octal
// let dec:number =5

//let bigVar:bigint = BigInt(100)
// let c
// console.log(c)

// let obj ={
//     name:'marwa'
// }
// console.log(obj.age)


// let z = null

// if(z==null){

// }


/*
any
 - union
- intersection
 - object => class, intefaces function constructors array =>tuples
 - primtive => bigint number=>enum sting boolean symbol
 void null undef
*/
// let x = ["a","b"]

// let z = []

// let arr: string[] = ['a','b','c']
// let arr1: Array<string> = ['v','h']

// function mul(x:number,y:number):number{
//     return (x*y)
// }

// let u :string|number

// u="hello0"
// u=6

//u=true

interface student{
    id:number;
    age?:number;  //optional ?:
    name:string;
}

let x :student ={
    id:5,
    name:'hassan'
}


let y=10
console.log(y)


function l(){
    console.log(y)
}
l()


console.log(isNaN(Number('hello')))

//isInteger isFinite
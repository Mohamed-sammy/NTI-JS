console.log('Js')
// Variables (String - number - Boolean - undefiend )
// var let const 
// var name = "nouran";
// var age = 10;
// console.log(age)
// boolean (true - false)
// var a 
// console.log(a)
// var x = "5"+3+2;
// var y =5+4+"5"
// console.log(y)
// concat
// var firstName ="Nouran";
// var lastName ="Ahmed";
// console.log(firstName+" "+lastName);


// Basic Operators
 
// Arthematical Operators (+ - / ** * % ++ --)
// console.log(5+2)
// console.log(5-2)
// console.log(5*2)
// console.log(5**2)
// console.log(5%2)
// var z = 5;
// console.log(z++)
// console.log(z)
// console.log(++z) 
// var a =5;
// var a = a+3
// console.log(a-=3)

// Assignment operators (-= += *= %=)

// bmi = mas/height**2;

// comparison Operators (> < == === != !== >= <=) ==> (true / false)
// var x =5;
// var y= 9;
// console.log(x > y);
// ( == )==>  value
// var a = "5";
// var b = 5;
// var c = 6;
// console.log(a == b) 
// ( === ) ==> value - data type
// console.log(a === b) 
// console.log(c != b)
// console.log(b >= c)
// console.log(typeof(b))
// unary operators ==> (condition) ? statement (true) : statment (false)

// var val = (b >= c) ?  true : false
// console.log(val)
/*
first person =>  50kg   -  1.69 meter
second =>70kg - 1.4 meter
*/

// if /else statment 
// if(b >= c) {
//  console.log(true)
// }
// else{
//     console.log(false)
// }
// var age = 20;

// if(age < 13){
//     console.log('less')
// }
// else if(age <= 20){
//     console.log('less than')
// }
// else{
//   console.log('greater')
// }
// logical operators (&& || !)
// && =>(true / true) ==> true
// && =>(true / false) ==> false
// || ==> (true / false) ==> true
// if(age > 13 || age == 25){
//     console.log(true)
// }
// else(
//     console.log(false)
// )

// if(!age == 13) console.log(true)

// a = 90  and 100
// b = 80 and 80 
// c = 70 and 80
// f 
// grade = 75 ;
// if(grade >= 90) console.log('A++')
// else if(grade >= 80 ) console.log('B')
// else if(grade >= 70) console.log('C')
// else console.log('failed')

// // switch Case 

// var num = 5;
// switch (num) {
//     case 1 : console.log("1"); break;
//     case 2 : console.log("2"); break;
//     case 3 : console.log("3"); break;
//     default : console.log(" not valid");
// }

// var day = 1
// loops (while , for )

// while 

// var w = 1 ;
// while(w <= 6){
//     console.log(w);
//  w+=2;
// }

// for (variable ; condition ; increment)

// for(var i = 0 ; i <= 10 ; i++){
//     console.log(i)
// }

// var OddNum ;
// for(var i = 0 ;i<10  ; i++){
//    if(i % 2 == 0){
//      OddNum = i;
//      console.log( i  + " Even Number " )
//    }
//    console.log( i  + " Not Even Number " )
// }

// console.log(OddNum)

// for(var a = 1 ; a <= 20 ; a++){
//     if(a == 3) break;
//     console.log(a)
// }

// function (name - arguments - return value )

// var a =3;
// var b = 5;
var x = 0;
// function sumTwoNum ( num1  , num2 , num3){
//     console.log(num1+num2)
//     return x = num1+num2+num3
//     // console.log(a+b)
// }
// sumTwoNum()
// sumTwoNum( 5 , 5)
// console.log(x)


// cel = (fr - 32)*(5/9);

// var cel = 0 ;
// function statment
function convertFrToCel(fr){
    var cell;
     cell=  (fr - 32)*(5/9);
    }
    convertFrToCel(6)
    // console.log(cell)

// false Value => (undefined , 0 , null , NaN , "")
// var age = 0 ;
// console.log((!age) ? true : false)
console.log(1/0)

// function expression
// var exp = function( num1 , num2 ){
//     return num1 + num2
// }
var exp = ( num1 , num2 )=>{
    return num1 + num2
}
console.log(exp(3,4))
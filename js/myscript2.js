// arrow function 

// var add = function(){
//     return 5+4;
// }

var add = (x , y) => {
    return x+y;
} 
console.log(add(4 ,5))

// template string 
var fName = "nouran";
var age = 10;
var nationality ="egyptian";

console.log("first Name =" + fName + "age =" +" "+ age + "nationality = "+ nationality)
console.log(`
first name = ${fName} 
 age = ${age} 
 nationality ${nationality}`
  )

  // objects 

//   var user = {
//     fname : "nouran" ,
//     birthYear : 1990 , 
//     nationality : "egyption"
//   }
//   console.log(user)

//   var BIO = (data)=>{
//       return data['fname']
//   }
  
//   console.log(BIO(user))

//   var tempConverter = (val)=>{
//       return {
//           f : val ,
//           c : (val-32)*(5/9),
//           k : (val+459)*(5/9)
//       }
//   }
//   var allTemp = tempConverter(70)
//   console.log(allTemp.k)
// var birthYear = 1990;
// var user = {
//     fname : "nouran" ,
//     birthYear : 1980 , 
//     nationality : "egyption",
//     age:function (year){
//         return year - this.birthYear
//     }
//   }

// console.log(user.age(2020))
// set for value of object
// user.fname = "ahmed"
// console.log(user)
// get value from obj
// var name = user.fname


// string Methods 

// var name = "Nouran";
// console.log(name[0])
// console.log(name.charAt(1));
// console.log(name.length);
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
//  var password = "1234567";
//  (password.includes('8900'))? console.log('invalid') : console.log('valid password');
//  var name = "  nouran ahmed "
//  console.log(name.trim())

//  // numbers Methods 

// console.log(Math.ceil(5.4))
// console.log(Math.floor(5.9))
// console.log(Math.round(5.9))
// console.log(Math.abs(-5))

// Array 

var arr = [];

// arr = ["nouran" , "ahmed" , 12 , true];
// console.log(arr)
// console.log(arr[1])
// arr[1] = "fayez"
// console.log(arr);
// console.log(arr[arr.length-1])

// // Array Methods 
// arr.push(7);
// arr.unshift('name')
// arr.pop();
// arr.shift();
// // arr.splice( start , deleted count , item);
// // arr.splice(1 , 1 , "ahmed");
// arr.splice(0 , 1 , "ahmed" , 8 );
// console.log(arr)

//  arr = ['hello' , 'bye' , "hi" , 'js' , 'html'];
 // filter ==> return array

//  var result = arr.filter(ele => ele.length >=  3)
//  console.log(result)

//  for(var i = 0 ; i < arr.length ; i++){
//      var ele = arr[i];
//      console.log(ele)
//  }
// var arr2 = [];
//  arr.forEach(item =>{
//      console.log(item)
//      arr2.push(item)
//  })
//  console.log(arr)
//  console.log(arr2)
// find() return value 
var items = [2,3,4,6,7];
var result = items.find(item=>item > 3 ) //==> value
console.log(result)
var result2 = items.findIndex(ele => ele > 3) // ==> index
console.log(result2);



//  abstract class User{
//     name:string;
//     address: string
//     constructor( address, name=""){
//         this.name = name
//         this.address = address
//     }
//     showData(x){

//     }
//     hello(){

//     }
// }

// class Student extends User{
//     dob : Date;
//     grade: number;
//     className: string;
//     constructor(address,dob, grade, className){
//         super(address)
//         this.dob = dob
//     }
//     showData(){
// console.log('student')
//     }
// }

// class Teacher extends User{
//     salary: number
//     constructor(a,b){
//         super('j','bhhjs')
//     }
//     showData(){
// console.log('teacher',this.name)
//     }
// }
// let t = new Teacher('f','hh')

// t.showData()


// interface names{
//     id:number
//     name: string
//     showNames()
// }

// let u:names = {
//     id:5,
//     name:'marwa',
//     showNames:function () {return this.name}
// }


// enum days{
//     sunday="sunday",
//     monday ="monday",
//     friday ="friday"
// }
// let d:days = days.friday


function getAge(y:number) {
    let year =2020
    return year-y
}
function getUserData(yOBirth){
    //console.log(name)
    // let age = 2020-yOBirth
    // let age1 ={
    //     age:2020-yOBirth,
    //     y:yOBirth
    // }
    // let age2 = getAge(yOBirth)
    // let age3 = function (y:number) {
    //     let year =2020
    //     return year-y
    // }
    // console.log(age3)
let user ={
age: function(){

    return function(){
        return 50
     }
     

    }
}
// let x=user.age()
console.log(user.age()())

}

getUserData(1985)














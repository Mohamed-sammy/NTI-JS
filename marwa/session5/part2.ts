/*
name, age, class, phone,.....
getdetails
get class
getgrade
*/

class Student{
    //private public protected
    protected id:number;
    protected name:string;
    protected age:number;
    protected className:string
    protected phone:string
    protected grades:number[]
    constructor(
        userId:number, 
        userName:string, 
        userAge:number, 
        userClass:string, 
        userPhone:string, 
        userGrades:number[]
        ){
            this.id = userId;
            this.name = userName
            this.age = userAge
            this.className = userClass
            this.phone = userPhone
            this.grades = userGrades
    }
    hello(){
        console.log('parent')
    }
    showStudent(){
        console.log(this.name)
    }
    z(){
        console.log('ay 7aga')
    }
    test(){
        console.log('student')
    }
}

class StudentNew extends Student{
    readonly x:number=5
    private address:string
    constructor(
        userId:number, 
        userName:string, 
        userAge:number, 
        userClass:string, 
        userPhone:string, 
        userGrades:number[],
        address:string
    ){
        super(userId, userName, userAge,userClass, userPhone, userGrades)
        this.address = address
    }
    hello(){
        console.log('child')
        super.hello()
        super.showStudent()
    }
y(){
    console.log('child y')
}
test(){
    console.log('child')
}
}


function test(o){
    o.test()
}
 let user = new Student(5,'ahmed',30,'a','0100000',[5,9,10]);
// user.showStudent()
 let userNem = new StudentNew(5,'ahmed',30,'a','0100000',[5,9,10],'add');
test(user)
test(userNem)


 // userNem.hello()
// userNem.showStudent()
// // mohammed = new Student()
// let mohammed : Student 
// //mohammed.name="ahmed";
// console.log(mohammed)
// mohammed.hello()
// let userrr :Student = new StudentNew(5,'a',30,'s','010000',[5,3,5],'fff')

// userrr.hello()
// userrr.z()
// // userrr.y()




class newClass{
    private static count =0;
    readonly z:string
    private _name:string
    constructor(readonly zx:string){
        this.z=zx
        newClass.count++
    }
    set name(newName: string){
        this._name = newName
    }

    get name(){
        return this._name;
    }
    static get countx(){
        return newClass.count
    }
    // static v(){
    //     countx()
    // }

}
console.log(newClass.countx)

let obj = new newClass('hello')
obj.name ='ahmed'
console.log(obj.name)
// obj.z = 'shaj'
console.log(newClass.countx)

let obj2 = new newClass('hello')
let obj3 = new newClass('hello')
let obj31 = new newClass('hello')
console.log(newClass.count)



export interface LoginUser{
    email:string
    password:string
    type: number
}
export interface User extends LoginUser{
    firstName:string
    lastName:string
    gender:number // 0, 1
    phone:string
    re_password:string
}


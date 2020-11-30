export interface User{
    name:string
    email:string
    gender:number
    martialStatus: boolean
    country :number
    address : {
        government:string
        street: string
        buildingNum:number
    }
    phone: string
    dob: Date
}
import { FormGroup } from '@angular/forms'

export function MustMatch(controlName: string, matchControlName:string){
return(fg:FormGroup)=>{
    const control = fg.controls[controlName]
    const matchingControl = fg.controls[matchControlName]
    if(!control || !matchingControl) return null
    if(matchingControl.errors && matchingControl.errors.mustMatch) return null
    if(control.value!=matchingControl.value) 
        matchingControl.setErrors({mustMatch:true})
    else
        matchingControl.setErrors({mustMatch:false})
}
    
}


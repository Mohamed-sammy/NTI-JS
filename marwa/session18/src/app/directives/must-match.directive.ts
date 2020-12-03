import { Directive, Input } from '@angular/core';
import {NG_VALIDATORS, Validator, ValidationErrors, FormGroup} from '@angular/forms'
import {MustMatch} from 'src/app/intefaces/validator'
@Directive({
  selector: '[mustMatch]',
  providers:[{provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi:true}]
})
export class MustMatchDirective {
  @Input() mM: string[] =[];
  constructor() { }
validate(fg:FormGroup){
  return MustMatch(this.mM[0],this.mM[1])
}
}

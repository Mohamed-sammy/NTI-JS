import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddformComponent } from './componentes/user/addform/addform.component';
import { FormBuilderAddComponent } from './componentes/user/form-builder-add/form-builder-add.component';
import { ReactiveAddFormComponent } from './componentes/user/reactive-add-form/reactive-add-form.component';

const routes: Routes = [
  {path:'', component:AddformComponent},
  {path:'reactive',component:ReactiveAddFormComponent},
  {path:'fb',component:FormBuilderAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

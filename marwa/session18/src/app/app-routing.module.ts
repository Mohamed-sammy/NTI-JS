import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';

const routes: Routes = [
  {path:'', component: ShopComponent},
  {path:'register', component:RegisterComponent},
  {path:'shop/:id',component:SingleproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

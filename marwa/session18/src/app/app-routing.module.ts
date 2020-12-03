import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';
import { TestrouteComponent } from './testroute/testroute.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  //{path:'',redirectTo:'shop',pathMatch:'full'},
  {path:'shop', children: [
    {path:'',component:ShopComponent},
    {path:':id',component:SingleproductComponent}, //shop/:id
  ]
},
{path:'**', component:TestrouteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

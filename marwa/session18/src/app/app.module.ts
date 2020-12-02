import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductcardComponent } from './shared/productcard/productcard.component';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';
import { UserService } from './services/user.service';
import { UserInterceptorInterceptor } from './services/user-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    ShopComponent,
    ProductcardComponent,
    SingleproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService,{
    provide:HTTP_INTERCEPTORS,
    useClass: UserInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

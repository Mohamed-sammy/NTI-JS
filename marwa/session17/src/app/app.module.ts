import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //template driven
import { ReactiveFormsModule } from '@angular/forms'; //reactive form
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AddformComponent } from './componentes/user/addform/addform.component';
import { ReactiveAddFormComponent } from './componentes/user/reactive-add-form/reactive-add-form.component';
import { FormBuilderAddComponent } from './componentes/user/form-builder-add/form-builder-add.component';
import { DataHandelComponent } from './data-handel/data-handel.component';
import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    ReactiveAddFormComponent,
    FormBuilderAddComponent,
    DataHandelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

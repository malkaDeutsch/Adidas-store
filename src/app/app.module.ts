import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ServicimModule } from './Core/servicim/servicim.module';
import { BagModule } from './Shered/bag/bag/bag.module';
import { ProductModuleModule } from './Product/product-module/product-module.module';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { MenegerModule } from './meneger/meneger.module';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { PayComponent } from './pay/pay.component';
import { NewUserComponent } from './new-user/new-user.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PayComponent,
    NewUserComponent,
    
 
    
    
 
 



 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ServicimModule,
    ProductModuleModule,
    BagModule,
 FormsModule ,
 MenegerModule,
 MatFormFieldModule,
 MatIconModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

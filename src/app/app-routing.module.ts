import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewProductComponent } from './meneger/add-new-product/add-new-product.component';
import { EditProductComponent } from './meneger/edit-product/edit-product.component';
import { ManagerHomeComponent } from './meneger/manager-home/manager-home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PayGuard } from './pay.guard';
import { PayComponent } from './pay/pay.component';
import { HomePageComponent } from './Product/home-page/home-page.component';

import { ProductScreenComponent } from './Product/product-screen/product-screen.component';
import { ShowDitilsSingleComponent } from './Product/show-ditils-single/show-ditils-single.component';
import { BagComponent } from './Shered/bag/bag.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"show-ditils-single",component:ShowDitilsSingleComponent},
  {path:"bagPage",component:BagComponent},
  {path:"prodactsPage",component:ProductScreenComponent},
  {path:"login",component:UserComponent},
  {path:"home",component:HomePageComponent},
  {path:"pay",component:PayComponent,canActivate:[PayGuard]}, 
  {path:"NewUser",component:NewUserComponent},
  {path:"manager",component:ManagerHomeComponent},
  {path:"editProduct",component:EditProductComponent},
  {path:"addProduct",component:AddNewProductComponent},
  {path:"",component:HomePageComponent},
  

  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

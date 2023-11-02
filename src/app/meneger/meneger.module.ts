import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { BagModule } from '../Shered/bag/bag/bag.module';
import { FormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { AllProductComponent } from './all-product/all-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { HeadarManegerComponent } from './headar-maneger/headar-maneger.component';


@NgModule({
  declarations: [ManagerHomeComponent, AllProductComponent, EditProductComponent, AddNewProductComponent, HeadarManegerComponent, ],
  imports: [
    CommonModule,
    BagModule,
    MatIconModule,
    MatBadgeModule,
    FormsModule
  ]
})
export class MenegerModule { }

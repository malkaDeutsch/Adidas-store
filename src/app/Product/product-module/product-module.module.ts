import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule}from '@angular/material/card';
import { ProductScreenComponent } from '../product-screen/product-screen.component';
import {MatButtonModule} from  '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ShowDitilsSingleComponent } from '../show-ditils-single/show-ditils-single.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BagModule } from 'src/app/Shered/bag/bag/bag.module';
import { HomePageComponent } from '../home-page/home-page.component';



@NgModule({
  declarations: [ProductScreenComponent,ShowDitilsSingleComponent,HomePageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    BagModule
  
  ],
})
export class ProductModuleModule { }

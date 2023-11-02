import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { BagComponent } from '../bag.component';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


export {HeaderComponent}from '../header/header.component';
export { BagComponent } from '../bag.component';


@NgModule({
  declarations: [BagComponent,HeaderComponent],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
  
    
  ],
   exports:[BagComponent,HeaderComponent,]
})
export class BagModule { }

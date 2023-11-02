import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, observable } from 'rxjs';
import { ClassPic } from 'src/app/Core/class-pic';
import { ProductService } from 'src/app/Core/product.service';
import { BagService } from 'src/app/Core/servicim/bag.service';

@Component({
  selector: 'app-show-ditils-single',
  templateUrl: './show-ditils-single.component.html',
  styleUrls: ['./show-ditils-single.component.scss']
})
export class ShowDitilsSingleComponent implements OnInit {
getDitailProduct:ClassPic;
temp:string="";
  constructor(private servicePicture:ProductService,private serviceBag:BagService,private router:Router) { }
  addToBag(){

this.serviceBag.addToBag(this.getDitailProduct)
this.router.navigate(['/bagPage']);
  }
  goToUser(){
    this.router.navigate(['/users']) ;
  }
  ngOnInit(): void {
    
this.servicePicture.itemToShow$.subscribe(newl=>{this.getDitailProduct=newl});
  }

}

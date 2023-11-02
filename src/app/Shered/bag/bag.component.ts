import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Observable } from 'rxjs';
import { ClassPic } from 'src/app/Core/class-pic';
import { ProductService } from 'src/app/Core/product.service';
import { BagService } from 'src/app/Core/servicim/bag.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  //  iconBag =new Observable<number>();
// arrItemsBag=new Observable<ClassPic[]>();
price=new Observable<number>();
// numinbag=new Observable<number>();
  continue(){

this.router.navigate(['/prodactsPage']);
  }
  goToPay(){
    this.router.navigate(['/pay']); 
  }
  constructor(private serviceBag:BagService,private servicePicture:ProductService,private router:Router) { }
  arrItemsBag=new Observable<ClassPic[]>();


  ngOnInit(): void {
  this.arrItemsBag=this.serviceBag.itemToBag$;
  this.price=this.serviceBag.price$;
// this.numinbag=this.serviceBag.numInBag$;
  }

}

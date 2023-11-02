import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassPic } from 'src/app/Core/class-pic';
import { ProductService } from 'src/app/Core/product.service';
import { BagService } from 'src/app/Core/servicim/bag.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  sizeUp:number;
  sizeDoun:number;
  price:number;
  color:string="";
  ditails:string="";
  name:string="";

  getDitailProduct:ClassPic;
  temp:string="";
  serviceUsr: any;
    constructor(private servicePicture:ProductService,private serviceBag:BagService,private router:Router) { }
    saveChanges(){
  this.servicePicture.editProduct( this.name, this.sizeUp,this.sizeDoun,this.price,this.color,this.ditails);
  this.router.navigate(['/manager']);
    }
    goToUser(){
      this.router.navigate(['/users']) ;
    }
    goToLogo(){
      this.router.navigate(['/home']);
    }
    addAProduct(){
      this.router.navigate(['/addProduct']);  
    }
    goToConect(){
      this.router.navigate(['/login']);   
    }
    getLeter=new Observable<string>();
  mass=new Observable<string>();
  leave(){
    this.getLeter=this.serviceUsr.showBreturnPicNamag$;
  
  }
  over(){
   this.getLeter=this.serviceUsr.showBreturnPicNamaAll$;
  }
    ngOnInit(): void {
      
  this.servicePicture.itemToShow$.subscribe(newl=>{this.getDitailProduct=newl});
    }
  
  }

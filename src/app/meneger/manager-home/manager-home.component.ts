import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/Core/product.service';
import { BagService } from 'src/app/Core/servicim/bag.service';
import { UsersService } from 'src/app/Core/servicim/users.service';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.scss']
})
export class ManagerHomeComponent implements OnInit {

  goToLogo(){
    this.router.navigate(['/home']);
  }
  goToProduct(){
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
addAProduct(){
  this.router.navigate(['/addProduct']);  
}
  constructor(private router:Router,private serviceBag:BagService,private serviceUsr:UsersService) { }
  numinbag=new Observable<number>();

  ngOnInit(): void {
    this.numinbag=this.serviceBag.numInBag$;
    this.getLeter=this.serviceUsr.showBreturnPicNamag$;
  }}

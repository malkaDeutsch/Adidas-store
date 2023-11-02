import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BagService } from 'src/app/Core/servicim/bag.service';
import { UsersService } from 'src/app/Core/servicim/users.service';

@Component({
  selector: 'app-headar-maneger',
  templateUrl: './headar-maneger.component.html',
  styleUrls: ['./headar-maneger.component.scss']
})
export class HeadarManegerComponent implements OnInit {
  goToLogo(){
    this.router.navigate(['/home']);
  }
  goToBag(){
    this.router.navigate(['/bagPage']); 
  }
  addProdact(){
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
  constructor(private router:Router,private serviceBag:BagService,private serviceUsr:UsersService) { }
  numinbag=new Observable<number>();

  ngOnInit(): void {
    this.numinbag=this.serviceBag.numInBag$;
    this.getLeter=this.serviceUsr.showBreturnPicNamag$;
  }

}

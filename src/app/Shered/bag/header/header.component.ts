import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassPic } from 'src/app/Core/class-pic';
import { BagService } from 'src/app/Core/servicim/bag.service';
import { UsersService } from 'src/app/Core/servicim/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  goToLogo(){
    this.router.navigate(['/home']);
  }
  goToBag(){
    this.router.navigate(['/bagPage']); 
  }
  goToProduct(){
    this.router.navigate(['/prodactsPage']); 
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

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/Core/servicim/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
messag=new Observable<string>();
  openMessage=new Observable<string>();
// open(){
//   this.serviceUsr.SetopenShopgetMessag();
// }
// leave(){
//   this.serviceUsr.SetopenShopgetMessagLeave();
// }
  constructor(private serviceUsr:UsersService) { }

  ngOnInit(): void {
this.messag=this.serviceUsr.getMessag$;
this.openMessage=this.serviceUsr.openShopgetMessag$;
  }

}

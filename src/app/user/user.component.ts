import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutsGardService } from '../auts-gard.service';

import { UsersService } from '../Core/servicim/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  password:string;
  userName:string;

  chek(){
    this.serviceUsr.findUser(this.userName,this.password);
     this.gardService.login();
   
}
newUser(){
  this.router.navigate(['/NewUser']);
  this.gardService.login();
}

  constructor(private serviceUsr:UsersService,private router:Router,private gardService:AutsGardService) { }

  ngOnInit(): void {

  }

}

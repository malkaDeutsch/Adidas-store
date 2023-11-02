import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../Core/servicim/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  passwordDeliver:string;
  userNameDeliver:string;
  phone:string;
  addres:string;
  name:string;
  subscribe(){
    this.serviceUsr.addUser(this.userNameDeliver,this.passwordDeliver,this.name,this.phone,this.addres,);
 
  }
  constructor(private serviceUsr:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

}

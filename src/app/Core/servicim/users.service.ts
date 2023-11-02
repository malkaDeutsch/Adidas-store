import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../User';
import { BagService } from './bag.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
manager:User={addres:"ppp",name:"dan",passWord:"123456",phone:"6565454545", userName:"manager123"}
u1:User={addres:"ppp",name:"malka",passWord:"212314165",phone:"0548574797", userName:"malka212314"};
u2:User={addres:"ppp",name:"chava",passWord:"12345",phone:"0548574797", userName:"chava234"};
temp:User={addres:"",name:"",passWord:"",phone:"", userName:""}
arrUsers:User[]=[this.u1,this.u2];
returnPicNam=new BehaviorSubject<string>("Adidas");
returnPicNamFirst=new BehaviorSubject<string>("A");
mssageOpen=new BehaviorSubject<string>("");
mssageOpenShop=new BehaviorSubject<string>("");
get showBreturnPicNamaAll$():Observable<string>{
  return this.returnPicNam.asObservable();
}
get showBreturnPicNamag$():Observable<string>{
  this.returnPicNamFirst.next(this.returnPicNam.value.charAt(0));
  return this.returnPicNamFirst.asObservable();
}
get getMessag$():Observable<string>{
  return this.mssageOpen.asObservable();
}
get openShopgetMessag$():Observable<string>{
  return this.mssageOpenShop.asObservable();
}

findUser(userName:string,passWord:string){
  let i;
  if(userName=="manager123"&&passWord=="123456"){
    this.router.navigate(['/manager']);
    this.returnPicNam.next(this.arrUsers[i].name);
this.mssageOpen.next( "!"+this.arrUsers[i].name+" היי ");}
  else{
for( i =0;i<this.arrUsers.length;i++){
if(userName==this.arrUsers[i].userName&&passWord==this.arrUsers[i].passWord){
this.returnPicNam.next(this.arrUsers[i].name);
this.mssageOpen.next( "!"+this.arrUsers[i].name+" היי ");
this.router.navigate(['/home']);
break;}}
if(i==this.arrUsers.length)
alert("משתמש זה לא קיים במערכת , אנא הרשם")
this.bagService.fromBegin();
}

}
addUser(user:string,password:string,name:string,phone:string,addres:string){
this.temp.name=name;
this.temp.addres=addres;
this.temp.passWord=password;
this.temp.phone=phone;
this.temp.userName=user;
this.arrUsers.push(this.temp);
alert("ההרשמה בוצעה בהצלחה");
let i=2;
for( i =2;i<this.arrUsers.length;i++){
  this.returnPicNam.next(this.arrUsers[i].name);
  this.mssageOpen.next( "!"+this.arrUsers[i].name+" היי ");
  this.router.navigate(['/prodactsPage']);
  break;}
}
// SetopenShopgetMessag(){
//   this.mssageOpenShop.next("!פתחנו חנות חדשה");
// }
// SetopenShopgetMessagLeave(){
//   this.mssageOpenShop.next("");
// }
  constructor(private router:Router , private bagService:BagService) { }
}

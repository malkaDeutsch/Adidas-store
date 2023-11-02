import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutsGardService {
  private isLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
login(){
this.isLogin.next(true);
}
get IsAuth$():Observable<boolean>{
  return this.isLogin.asObservable();
}
  constructor() { }
}

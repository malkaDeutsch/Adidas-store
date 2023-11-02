import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ClassPic } from '../class-pic';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})


export class BagService {
  temp:Observable<ClassPic>;
  arr:ClassPic[]=[];
private sumPrice=new BehaviorSubject<number>(0);
private arrBag=new BehaviorSubject<ClassPic[]>(this.arr);
private numInBag=new BehaviorSubject<number>(0);
get numInBag$():Observable<number>{
  return this.numInBag.asObservable();
}
get showBag$():Observable<ClassPic[]>{
  return this.arrBag.asObservable();
}
get itemToBag$():Observable<ClassPic[]>{
  return this.arrBag.asObservable();
}
get price$():Observable<number>{
  return this.sumPrice.asObservable();
}
addItem=new Observable<ClassPic>();
addToBag(itm:ClassPic){

this.chekIsIn(itm);

this.sumPrice.next(this.sumPrice.value+itm.price)
this.numInBag.next(this.numInBag.value+1);
}
i:number;
chekIsIn(item:ClassPic){
for( this.i =0;this.i<this.arr.length;this.i++){
  if (this.arr[this.i]==item){
    this.arr[this.i].amount+=1;
    break;
  }
}
if(this.i==this.arr.length){
  this.arr.push(item);
  this.arrBag.next(this.arr);
}

}
fromBegin(){
  this.sumPrice.next(0);
  this.arr=[]
  this.arrBag.next(this.arr);
  this.numInBag.next(0);
}
  constructor(     ) { }
}

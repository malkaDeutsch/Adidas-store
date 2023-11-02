import { Injectable } from '@angular/core';
// import { getUnpackedSettings } from 'http2';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ClassPic } from './class-pic';

@Injectable({
  providedIn: 'root'
})

// type:1-addidas,2-tommy,3-guese,4-puma
export class ProductService {
  p1:ClassPic={type:1,id:"10.jpg" ,color:"שחור",name:"כובע שמש",price:100,sizeArr:[1,2,3,4,8,12],ditails:"כובע ספורטיבי ממותג להגנה מלאה  ",amount:1};
  p3:ClassPic={type:1,id:"13.jpg" ,color:"שחור",name:"חולצת פוטר",price:250,sizeArr:[37,38,39,40,41],ditails:"חולצת פוטר מחממת לגבר",amount:1};
  p4:ClassPic={type:1,id:"9.jpg" ,color:"כחול",name:"נעל ספורט",price:400,sizeArr:[26,27,28,29,30],ditails:"נעל ספורט לילדים",amount:1};
  p6:ClassPic={type:1,id:"16.jpg" ,color:"אדום",name:"נעל אורטופדית",price:480,sizeArr:[37,38,39,40,41],ditails:"נעל אורטופדית מומלצת לספורטאים",amount:1};
  p7:ClassPic={type:1,id:"17.jpg" ,color:"לבן",name:"כדור ספורט",price:150,sizeArr:[37,38,39,40,41],ditails:"כדור ספורט ממותג למשחק",amount:1};
  p8:ClassPic={type:1,id:"30.jpg" ,color:"צבעוני",name:"נעל פופ",price:600,sizeArr:[37,38,39,40,41],ditails:"נעל בסגנון פופ",amount:1};
  p9:ClassPic={type:1,id:"8.jpg" ,color:"כחול",name:"נעל ספורט",price:400,sizeArr:[26,27,28,29,30],ditails:"נעל ספורט לילדים",amount:1};
  p10:ClassPic={type:1,id:"14.jpg" ,color:"אדום",name:"נעל אורטופדית",price:480,sizeArr:[37,38,39,40,41],ditails:"נעל אורטופדית מומלצת לספורטאים",amount:1};
  p11:ClassPic={type:1,id:"16.jpg" ,color:"לבן",name:"כדור ספורט",price:150,sizeArr:[37,38,39,40,41],ditails:"כדור ספורט ממותג למשחק",amount:1};
  p12:ClassPic={type:1,id:"29.jpg" ,color:"צבעוני",name:"נעל פופ",price:600,sizeArr:[37,38,39,40,41],ditails:"נעל בסגנון פופ",amount:1};
 arrPicture:ClassPic[]=[this.p1,this.p3,this.p4,this.p6,this.p7,this.p8,this.p6,this.p7,this.p8,this.p6];
 private obsAarrPicture=new BehaviorSubject<ClassPic[]>(this.arrPicture);
 private itemToShow=new BehaviorSubject<ClassPic>(null);
get arrpic$():Observable<ClassPic[]>{
  return this.obsAarrPicture.asObservable();
}
temp:ClassPic={type:1,id:"" ,color:"",name:"",price:0,sizeArr:[],ditails:"",amount:0};

logoArr:string[]=["logo1a","logo2t","logo3g"];
arrLogo=new BehaviorSubject<string[]>(this.logoArr);
get itemToShow$():Observable<ClassPic>{
  return this.itemToShow.asObservable();
}
get arrLogo$():Observable<string[]>{
  return this.arrLogo.asObservable();
}
i:number;
curItem:number;
show_ditails(name: string){
  for( this.i=0;this.i<this.arrPicture.length;this.i++){
if(this.arrPicture[this.i].name==name){
  this.itemToShow.next(this.arrPicture[this.i]); 
  this.curItem=this.i;
}
  }
}
p:number;
k:number;
arrTempSize:number[];
editProduct(name:string,sizeUp:number,sizeDoun:number,price:number,color:string,ditails:string){
if(name.trim()!="") 
this.arrPicture[this.curItem].name=name;
if(price!=0) 
this.arrPicture[this.curItem].price=price;
if(color.trim()!="")
this.arrPicture[this.curItem].color=color;
if(ditails.trim()!="")
this.arrPicture[this.i].ditails=ditails; 
if(sizeUp!=0){
this.arrPicture[this.curItem].sizeArr.push(sizeUp);
this.arrPicture[this.curItem].sizeArr.sort();} 
// if(sizeDoun!=0){
// for( this.k=0;this.k<this.arrPicture[this.curItem].sizeArr.length;this.k++)
//  if(this.arrPicture[this.curItem].sizeArr[this.k]==sizeDoun)
//  this.arrPicture[this.curItem].sizeArr.concat
}

addProductManeger(name:string,sizeUp:number,price:number,color:string,ditails:string,id:string){
this.temp.name=name;
this.temp.color=color;
this.temp.ditails=ditails;
this.temp.price=price;
this.temp.sizeArr[0]=sizeUp;
// this.temp.id=id;

alert("jhgjfhfj");
this.arrPicture.push(this.temp);
}
 constructor() { }
}

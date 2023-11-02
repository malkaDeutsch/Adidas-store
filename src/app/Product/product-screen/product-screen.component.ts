import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassPic } from 'src/app/Core/class-pic';
import { ProductService } from 'src/app/Core/product.service';


@Component({
  selector: 'app-product-screen',
  templateUrl: './product-screen.component.html',
  styleUrls: ['./product-screen.component.scss']
})
export class ProductScreenComponent implements OnInit {
picArr=new Observable<ClassPic[]>();
// logArr=new Observable<string[]>();
func_show_product_big( name:string){
 this. servicePicture.show_ditails(name);
this.router.navigate(['/show-ditils-single']);
}
  constructor(private servicePicture:ProductService,private router:Router) { }
  // favoriteSeason: string;
  // seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  // showFiller = false;
  ngOnInit(): void {
    this.picArr=this.servicePicture.arrpic$;
    // this.logArr=this.servicePicture.arrLogo$;
  }

}

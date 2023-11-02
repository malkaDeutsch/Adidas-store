import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassPic } from 'src/app/Core/class-pic';
import { ProductService } from 'src/app/Core/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {
  listAllProducts=new Observable<ClassPic[]>();
  constructor(private servicePicture:ProductService,private router:Router) { }
  editProduct(name:string){
      this. servicePicture.show_ditails(name);
     this.router.navigate(['/editProduct']);
     
  }
  ngOnInit(): void {
    this.listAllProducts=this.servicePicture.arrpic$;
  }

}

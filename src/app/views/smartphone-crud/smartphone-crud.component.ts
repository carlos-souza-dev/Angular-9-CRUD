import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-smartphone-crud',
  templateUrl: './smartphone-crud.component.html',
  styleUrls: ['./smartphone-crud.component.css']
})
export class SmartphoneCrudComponent implements OnInit {

  smartphones: Product[]

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getSmartphone();
  }

  navigateToSmartphoneCreate(){
    this.router.navigate(['/smartphones/create'])
  }

  getSmartphone():void {
    this.productService.listSmartphone().subscribe( res => {
      this.smartphones = res
    })
  }

}

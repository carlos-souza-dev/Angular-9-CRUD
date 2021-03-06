import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router, 
    private productService: ProductService,
    private headerService: HeaderService
  ) {

    this.headerService.headerData = {
      title: 'Home',
      icon: 'home',
      routeUrl: '/',
      statusColor: '',
      page: 'home'
    }

   }

  notebooks: Product[]
  smartphones: Product[]

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.listNotebook().subscribe( res => {
      this.notebooks = res;
    })
      
    this.productService.listSmartphone().subscribe( res => {
      this.smartphones = res;
    })
  }

}

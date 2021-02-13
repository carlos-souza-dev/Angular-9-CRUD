import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-smartphone-update',
  templateUrl: './smartphone-update.component.html',
  styleUrls: ['./smartphone-update.component.css']
})
export class SmartphoneUpdateComponent implements OnInit {

  smartphone: Product[]

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-smartphone-update',
  templateUrl: './smartphone-update.component.html',
  styleUrls: ['./smartphone-update.component.css']
})
export class SmartphoneUpdateComponent implements OnInit {

  smartphone: Product

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById('smartphone', id).subscribe( smartphone => {
      this.smartphone = smartphone
    })
  }

  updateSmartphone(): void {

  }

  cancel(): void {
    this.router.navigate(['/smartphones']);
  }
}

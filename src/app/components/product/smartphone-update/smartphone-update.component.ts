import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from '../../template/header/header.models';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-smartphone-update',
  templateUrl: './smartphone-update.component.html',
  styleUrls: ['./smartphone-update.component.css']
})
export class SmartphoneUpdateComponent implements OnInit {

  smartphone: Product

  constructor(
    private router: Router, 
    private productService: ProductService, 
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) { 

    this.headerService.headerData = {
      title: 'Smartphone | Update',
      icon: 'build_circle',
      routeUrl: '/smartphones',
      statusColor: 'update',
      page: 'smartphone'
    }

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById('smartphone', id).subscribe( smartphone => {
      this.smartphone = smartphone
    })
  }

  updateSmartphone(): void {
    this.productService.updateItem('smartphone', this.smartphone).subscribe(() => {
      this.productService.showMenssage('Produso atualizado!')
      this.router.navigate(['/smartphones'])
    }) 
  }

  cancel(): void {
    this.router.navigate(['/smartphones']);
  }
}

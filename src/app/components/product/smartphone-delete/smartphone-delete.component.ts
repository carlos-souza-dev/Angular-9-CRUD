import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-smartphone-delete',
  templateUrl: './smartphone-delete.component.html',
  styleUrls: ['./smartphone-delete.component.css']
})
export class SmartphoneDeleteComponent implements OnInit {

  smartphone: Product

  constructor(
    private router: Router, 
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById('smartphone', id).subscribe(smartphone => {
      this.smartphone = smartphone
    })
  }

  deleteSmartphone () {
    this.productService.deleteItem('smartphone', this.smartphone.id).subscribe(() => {
      this.productService.showMenssage('Item excluído com sucesso!')
    })
    this.router.navigate(['/smartphones'])
  }

  cancel() {
    this.router.navigate(['/smartphones'])
  }

}

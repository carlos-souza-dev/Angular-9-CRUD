import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-notebook-crud',
  templateUrl: './notebook-crud.component.html',
  styleUrls: ['./notebook-crud.component.css']
})
export class NotebookCrudComponent implements OnInit {

  notebooks: Product[]

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getNotebook();
  }

  navigateToNotebookCreate() {
    this.router.navigate(['notebooks/create'])
  }

  navigateToNotebookUpdate() {
    this.router.navigate(['notebooks/update'])
  }

  getNotebook(): void {
    this.productService.listNotebook().subscribe( res => {
      this.notebooks = res;
    })
  }
}

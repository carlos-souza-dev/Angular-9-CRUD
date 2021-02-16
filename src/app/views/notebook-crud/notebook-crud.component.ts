import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-notebook-crud',
  templateUrl: './notebook-crud.component.html',
  styleUrls: ['./notebook-crud.component.css']
})
export class NotebookCrudComponent implements OnInit {

  notebooks: Product[]

  constructor(
    private router: Router, 
    private productService: ProductService,
    private headerService: HeaderService
  ) {

    this.headerService.headerData = {
      title: 'Notebook',
      icon: 'computer',
      routeUrl: '/',
      statusColor: '',
      page: 'notebook'
    }

   }

  ngOnInit(): void {
    this.getNotebook();
  }

  navigateToNotebookCreate() {
    this.router.navigate(['notebooks/create'])
  }

  getNotebook(): void {
    this.productService.listNotebook().subscribe( res => {
      this.notebooks = res;
    })
  }
}

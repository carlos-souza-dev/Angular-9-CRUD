import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-notebook-created',
  templateUrl: './notebook-created.component.html',
  styleUrls: ['./notebook-created.component.css']
})
export class NotebookCreatedComponent implements OnInit {

  notebook: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createNotebook(url): void {
    this.productService.createItem(url, this.notebook).subscribe(() => {
      this.productService.showMenssage('Notebook salvo!')
      this.router.navigate(['/notebooks'])
    })
  }

  cancel(): void {
    this.router.navigate(['/notebooks'])
  }
}

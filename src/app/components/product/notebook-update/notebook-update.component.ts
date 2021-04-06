import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-notebook-update',
  templateUrl: './notebook-update.component.html',
  styleUrls: ['./notebook-update.component.css']
})
export class NotebookUpdateComponent implements OnInit {

  constructor(
    private router: Router, 
    private productService: ProductService, 
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) { 

    this.headerService.headerData = {
      title: 'Notebook | Update',
      icon: 'build_circle',
      routeUrl: '/notebooks',
      statusColor: 'update',
      page: 'notebook'
    }

  }

  notebook: Product = {} as Product;
  error: boolean = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById('notebooks/search', id).subscribe(notebook => {
      if(notebook.id >= 1){
        this.notebook = notebook
      } else {
        this.productService.showMenssage('Produto não encontrado!', true);
      }
    })
  }

  updateNotebook(): void {
    this.productService.updateItem('notebooks/update', this.notebook).subscribe((res) => {
      this.productService.showMenssage('Produto atualizado!')
      this.router.navigate(['/notebooks'])
    })
  }

  cancel(): void {
    this.router.navigate(['/notebooks'])
  }

}

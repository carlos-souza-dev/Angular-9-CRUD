import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-notebook-delete',
  templateUrl: './notebook-delete.component.html',
  styleUrls: ['./notebook-delete.component.css']
})
export class NotebookDeleteComponent implements OnInit {

  notebook = {} as Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private headerService: HeaderService
  ) { 

    this.headerService.headerData = {
      title: 'Notebook | Delete',
      icon: 'delete_outline',
      routeUrl: 'notebooks',
      statusColor: 'delete',
      page: 'notebook'
    }

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById('notebooks/search', id).subscribe((notebook) =>{
      this.notebook = notebook
    })
  }

  deleteNotebook(): void {
    this.productService.deleteItem('notebooks/delete', this.notebook.id).subscribe(() => {
      this.productService.showMenssage('Item excluído com sucesso!')
      this.router.navigate(['notebooks'])
    })
  }

  cancel(): void {
    this.router.navigate(['/notebooks'])
  }

}

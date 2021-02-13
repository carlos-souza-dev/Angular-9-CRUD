import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-notebook-update',
  templateUrl: './notebook-update.component.html',
  styleUrls: ['./notebook-update.component.css']
})
export class NotebookUpdateComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) { }

  notebook: Product

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById('notebook', id).subscribe(notebook => {
      this.notebook = notebook
    })
  }

  updateNotebook(): void {

  }

  cancel(): void {
    this.router.navigate(['/notebooks'])
  }

}

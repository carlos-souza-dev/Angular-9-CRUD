import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  notebookUrl = "http://localhost:3001/notebook"
  smartphoneUrl = "http://localhost:3001/smartphone"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMenssage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: "snack-bar",
    })
  }

  createNotebook (product: Product ): Observable<Product> {
    return this.http.post<Product>(this.notebookUrl, product)
  }

  createSmartphone (product: Product ): Observable<Product> {
    return this.http.post<Product>(this.smartphoneUrl, product)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:3001/"
  // apiSmartphone = "http://localhost:3001/"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  showMenssage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: "snack-bar",
    })
  }

  createItem (url, product: Product ): Observable<Product> {
    return this.http.post<Product>(this.apiUrl+url, product)
  }

  listSmartphone (): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'smartphone')
  }

  listNotebook (): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'notebook')
  }

  deleteItem (url, id ) {
    return this.http.delete(this.apiUrl+url+`/${id}`)
  }

  updateItem (url, id) {
    return this.http.patch(this.apiUrl+url, id, this.httpOptions)
  }
  
}

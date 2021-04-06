import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://mvcphp.local:8000/api"
  apiSmartphone = "http://localhost:3001/smartphone"

  constructor(
    private snackBar: MatSnackBar, 
    private http: HttpClient
  ) { }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    })
  }

  createItem (url, product: Product ): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/${url}/create`, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any>{
    console.log("Objeto",e)
    this.showMenssage('Ocorreu um erro! Error: '+e.status, true)
    return EMPTY
  }

  listSmartphone (): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/smartphones`)
  }

  listNotebook (): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/notebooks`)
  }

  deleteItem (url: string, id: number ): Observable<Product>  {
    const searchUrl = `${this.apiUrl}/${url}/${id}`;
    return this.http.delete<Product>(searchUrl)
  }

  updateItem (url: string, item: Product): Observable<Product> {
    const searchUrl = `${this.apiUrl}/${url}/${item.id}`;
    return this.http.put<Product>(searchUrl, item)
  }
  
  readById(url: string, id: string): Observable<Product> {
    const searchUrl = `${this.apiUrl}/${url}/${id}`;
    return this.http.get<Product>(searchUrl)
  }

}

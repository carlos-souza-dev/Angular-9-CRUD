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

  apiUrl = "http://localhost:3001/"
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
    return this.http.post<Product>(this.apiUrl+url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any>{
    console.log("Objeto",e)
    this.showMenssage('Ocorreu um erro!', true)
    return EMPTY
  }

  listSmartphone (): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'smartphone')
  }

  listNotebook (): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'notebook')
  }

  deleteItem (url: string, id: number ): Observable<Product>  {
    const searchUrl = `${this.apiUrl}${url}/${id}`;
    console.log("TEste", searchUrl)
    return this.http.delete<Product>(searchUrl)
  }

  updateItem (url: string, item: Product): Observable<Product> {
    const searchUrl = `${this.apiUrl}${url}/${item.id}`;
    return this.http.put<Product>(searchUrl, item)
  }
  
  readById(url: string, id: string): Observable<Product> {
    const searchUrl = `${this.apiUrl}${url}/${id}`;
    return this.http.get<Product>(searchUrl)
  }

}

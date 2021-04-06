import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from './news.model';
import { environment } from 'environments.prod';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsUrl = `${environment.URL_API}&apiKey=${environment.KEY_API}`

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  public readNews(): Observable<Response>{
    return this.http.get<Response>(this.newsUrl)
  }
}

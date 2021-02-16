import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Response } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ca1ce57fdd0f40a8ba1a88403a72a809'

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

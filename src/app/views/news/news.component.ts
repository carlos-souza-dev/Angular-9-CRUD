import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Articles } from './articles.model';
import { Response } from './news.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  notice: Articles[]

  constructor(
    private newsService: NewsService,
    private headerService: HeaderService
  ) { 

    this.headerService.headerData = {
      title: 'NewsApi',
      icon: 'article',
      routeUrl: '/',
      statusColor: '',
      page: 'api'
    }

  }
  
  ngOnInit () {
    this.getNews()
  }

  getNews() {
    this.newsService.readNews().subscribe(notice => {
      this.notice = notice.articles
    })
  }
  
}

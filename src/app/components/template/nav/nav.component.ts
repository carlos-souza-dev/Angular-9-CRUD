import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  pageActive = localStorage.getItem('pageActive') ?
    localStorage.getItem('pageActive') : 'home';

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

  get page (): string {
    return this.headerService.headerData.page
  }  
}

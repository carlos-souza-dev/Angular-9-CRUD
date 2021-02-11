import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  pageActive = localStorage.getItem('pageActive') ?
    localStorage.getItem('pageActive') : 'home';

  constructor() { 
  }

  ngOnInit(): void {

  }

  funcActive (param) {
    this.pageActive = param
    localStorage.setItem('pageActive', this.pageActive)
    return this.pageActive
  }
  
  
}

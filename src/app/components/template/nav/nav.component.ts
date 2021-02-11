import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  pageActive = 'home';

  constructor() { }

  ngOnInit(): void {

  }

  funcActive (param) {
    this.pageActive = param
    return this.pageActive
  }


}

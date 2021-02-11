import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smartphone-crud',
  templateUrl: './smartphone-crud.component.html',
  styleUrls: ['./smartphone-crud.component.css']
})
export class SmartphoneCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateToSmartphoneCreate(){
    this.router.navigate(['/smartphones/create'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notebook-crud',
  templateUrl: './notebook-crud.component.html',
  styleUrls: ['./notebook-crud.component.css']
})
export class NotebookCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToNotebookCreate( ) {
    this.router.navigate(['notebooks/create'])
  }
}

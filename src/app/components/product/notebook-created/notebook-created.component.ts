import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebook-created',
  templateUrl: './notebook-created.component.html',
  styleUrls: ['./notebook-created.component.css']
})
export class NotebookCreatedComponent implements OnInit {

  atributoTeste = "iddatagp"
  cont = 0;
  constructor() { }

  ngOnInit(): void {
  }

  funcTeste(): void {
    this.cont++
    this.atributoTeste = "Mudou "+this.cont
  }

}

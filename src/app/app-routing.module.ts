import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { NotebookCrudComponent } from './views/notebook-crud/notebook-crud.component';
import { NotebookCreatedComponent } from './components/product/notebook-created/notebook-created.component'
import { SmartphoneCrudComponent } from './views/smartphone-crud/smartphone-crud.component';
import { SmartphoneCreatedComponent } from './components/product/smartphone-created/smartphone-created.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "notebooks",
    component: NotebookCrudComponent
  }, {
    path: "notebooks/create",
    component: NotebookCreatedComponent
  }, {
    path: "smartphones",
    component: SmartphoneCrudComponent
  }, {
    path: "smartphones/create",
    component: SmartphoneCreatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

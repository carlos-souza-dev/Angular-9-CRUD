import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { NotebookCrudComponent } from './views/notebook-crud/notebook-crud.component';
import { NotebookCreatedComponent } from './components/product/notebook-created/notebook-created.component'
import { SmartphoneCrudComponent } from './views/smartphone-crud/smartphone-crud.component';
import { SmartphoneCreatedComponent } from './components/product/smartphone-created/smartphone-created.component';
import { SmartphoneUpdateComponent } from './components/product/smartphone-update/smartphone-update.component';
import { NotebookUpdateComponent } from './components/product/notebook-update/notebook-update.component';
import { SmartphoneDeleteComponent } from './components/product/smartphone-delete/smartphone-delete.component';
import { NotebookDeleteComponent } from './components/product/notebook-delete/notebook-delete.component';

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
    path: "notebooks/update/:id",
    component: NotebookUpdateComponent
  }, {
    path: "notebooks/delete/:id",
    component: NotebookDeleteComponent
  }, {
    path: "smartphones",
    component: SmartphoneCrudComponent
  }, {
    path: "smartphones/create",
    component: SmartphoneCreatedComponent
  }, {
    path: "smartphones/update/:id",
    component: SmartphoneUpdateComponent
  }, {
    path: "smartphones/delete/:id",
    component: SmartphoneDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

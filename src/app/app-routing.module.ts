import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { NotebookCrudComponent } from './views/notebook-crud/notebook-crud.component';
import { NotebookCreatedComponent } from './components/product/notebook-created/notebook-created.component'
import { SmartphoneCrudComponent } from './views/smartphone-crud/smartphone-crud.component';
import { SmartphoneCreatedComponent } from './components/product/smartphone-created/smartphone-created.component';
import { SmartphoneUpdateComponent } from './components/product/smartphone-update/smartphone-update.component';
import { NotebookUpdateComponent } from './components/product/notebook-update/notebook-update.component';

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
    path: "notebooks/update",
    component: NotebookUpdateComponent
  }, {
    path: "smartphones",
    component: SmartphoneCrudComponent
  }, {
    path: "smartphones/create",
    component: SmartphoneCreatedComponent
  }, {
    path: "smartphones/update",
    component: SmartphoneUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

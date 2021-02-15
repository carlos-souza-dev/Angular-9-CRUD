import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { NotebookCrudComponent } from './views/notebook-crud/notebook-crud.component';
import { NotebookCreatedComponent } from './components/product/notebook-created/notebook-created.component';
import { SmartphoneCreatedComponent } from './components/product/smartphone-created/smartphone-created.component';
import { SmartphoneCrudComponent } from './views/smartphone-crud/smartphone-crud.component';

// Modulos
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


// Diretivas
import { GreenDirective } from './directives/green.directive';
import { CancelDirective } from './directives/cancel.directive';
import { ConfirmDirective } from './directives/confirm.directive';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NotebookUpdateComponent } from './components/product/notebook-update/notebook-update.component';
import { SmartphoneUpdateComponent } from './components/product/smartphone-update/smartphone-update.component';
import { EditDirective } from './directives/edit.directive';
import { DialogComponent } from './views/dialog/dialog.component';
import { SmartphoneDeleteComponent } from './components/product/smartphone-delete/smartphone-delete.component';
import { NotebookDeleteComponent } from './components/product/notebook-delete/notebook-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    NotebookCrudComponent,
    NotebookCreatedComponent,
    SmartphoneCreatedComponent,
    SmartphoneCrudComponent,
    GreenDirective,
    CancelDirective,
    ConfirmDirective,
    NotebookUpdateComponent,
    SmartphoneUpdateComponent,
    EditDirective,
    DialogComponent,
    SmartphoneDeleteComponent,
    NotebookDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// Diretivas
import { GreenDirective } from './directives/green.directive';
import { CancelDirective } from './directives/cancel.directive';
import { ConfirmDirective } from './directives/confirm.directive';




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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

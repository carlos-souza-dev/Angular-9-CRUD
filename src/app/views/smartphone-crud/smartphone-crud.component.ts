import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-smartphone-crud',
  templateUrl: './smartphone-crud.component.html',
  styleUrls: ['./smartphone-crud.component.css']
})
export class SmartphoneCrudComponent implements OnInit {

  smartphones: Product[]

  constructor(
    private router: Router, 
    private productService: ProductService,
    private dialog: MatDialog,
    private headerService: HeaderService
  ) { 

    this.headerService.headerData = {
      title: 'Smartphone',
      icon: 'phone_iphone',
      routeUrl: '/'
    }

  }

  ngOnInit(): void {
    this.getSmartphone()
  }

  navigateToSmartphoneCreate(){
    this.router.navigate(['/smartphones/create'])
  }

  getSmartphone():void {
    this.productService.listSmartphone().subscribe( res => {
      this.smartphones = res
    })
  }

  // DIALOG
  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        id: id,
        url: 'smartphone'
      }, width: "300px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getSmartphone()
      }
    });
  }



}

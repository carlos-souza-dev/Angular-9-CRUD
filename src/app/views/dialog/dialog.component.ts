import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete(url: string, id: number){
    this.productService.deleteItem(url, id).subscribe(() => {
      this.productService.showMenssage("Item excluir com sucesso!")
    })
  }
}

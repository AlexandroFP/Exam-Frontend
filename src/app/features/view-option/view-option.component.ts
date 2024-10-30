import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Address } from 'src/app/models/address';
import { AddresModalComponent } from 'src/app/shared/addres-modal/addres-modal/addres-modal.component';

@Component({
  selector: 'app-view-option',
  templateUrl: './view-option.component.html',
  styleUrls: ['./view-option.component.css']
})
export class ViewOptionComponent implements OnInit {
  isModalOpen = false;
  constructor(public dialog: MatDialog) {
    
   }

  ngOnInit() {
  }

  openModal() {
    const dialogRef = this.dialog.open(AddresModalComponent, {
      width: '600px',
      height: '400px',
      position: {
        top: '20%',
        left: '10%', 
       
      }
    });

    dialogRef.afterClosed().subscribe((result:any) => {
    
    });
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.css'],
})
export class EditItemModelComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) {}

  ngOnInit(): void {}

  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }
}

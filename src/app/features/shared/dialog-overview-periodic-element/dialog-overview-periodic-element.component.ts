import {Component, inject, model} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {PeriodicElement} from "../../layout/models/PeriodicElement";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-dialog-overview-periodic-element',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    JsonPipe,
  ],
  templateUrl: './dialog-overview-periodic-element.component.html',
  styleUrl: './dialog-overview-periodic-element.component.scss'
})
export class DialogOverviewPeriodicElementComponent {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewPeriodicElementComponent>);
  readonly data = inject<PeriodicElement>(MAT_DIALOG_DATA);
  readonly periodicElements = model(this.data);
  readonly name = model('');
  readonly weight = model('');
  readonly position = model('');
  readonly symbol = model('');

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import {Component, inject, OnInit} from '@angular/core';
import {PeriodicElement} from "../../layout/models/PeriodicElement";
import {CdkTableModule} from "@angular/cdk/table";
import {PeriodElementService} from "../../layout/services/period-element.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogOverviewPeriodicElementComponent
} from "../../shared/dialog-overview-periodic-element/dialog-overview-periodic-element.component";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-listing-sqrt',
  standalone: true,
  imports: [
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './listing-sqrt.component.html',
  styleUrl: './listing-sqrt.component.scss'
})
export class ListingSqrtComponent implements OnInit {
  private PeriodElementService = inject(PeriodElementService);
  readonly dialog = inject(MatDialog);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource: any[] = [];

  listingData(data: PeriodicElement | null) {
    if (!data) {
      this.PeriodElementService.getAllPeriodElements().subscribe(value => this.dataSource = value);
    } else {
      this.dataSource = this.dataSource.map((value1, idk) => {
        if (idk == data.id) {
          return data
        } else {
          return value1
        }
      });
    }
  }

  ngOnInit(): void {
    this.listingData(null)
  }

  changeValue(idk: number, periodicElement: PeriodicElement) {
    const dialogRef = this.dialog.open(DialogOverviewPeriodicElementComponent, {
      data: {
        id: idk,
        name: periodicElement.name,
        position: periodicElement.position,
        symbol: periodicElement.symbol,
        weight: periodicElement.weight,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result !== undefined) {
        this.listingData(result);
      }
    });
  }
}

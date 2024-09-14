import {Component, inject, OnInit} from '@angular/core';
import {PeriodicElement} from "../../layout/models/PeriodicElement";
import {CdkTableModule} from "@angular/cdk/table";
import {PeriodElementService} from "../../layout/services/period-element.service";

@Component({
  selector: 'app-listing-sqrt',
  standalone: true,
  imports: [CdkTableModule],
  templateUrl: './listing-sqrt.component.html',
  styleUrl: './listing-sqrt.component.scss'
})
export class ListingSqrtComponent implements OnInit {
  private PeriodElementService = inject(PeriodElementService);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [];

  ngOnInit(): void {
    this.PeriodElementService.getAllPeriodElements().subscribe(value => this.dataSource = value);
  }

}

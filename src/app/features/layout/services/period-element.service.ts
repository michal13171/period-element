import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {PeriodicElement} from "../models/PeriodicElement";

@Injectable({
  providedIn: 'root'
})
export class PeriodElementService {

  constructor(private http: HttpClient) {
  }

  getAllPeriodElements(): Observable<PeriodicElement[]> {
    return this.http
      .get<PeriodicElement[]>('table.json')
      .pipe(
        catchError((err) => {
          console.error('Caught in CatchError. Throwing error');

          throw new Error(err);
        }),
      );
  }
}

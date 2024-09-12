import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./features/layout/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/pages/listing-sqrt/listing-sqrt.component')
          .then(module => module.ListingSqrtComponent)
      }]
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

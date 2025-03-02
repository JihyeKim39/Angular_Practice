// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'search/:searchItem', component:HomeComponent}
];

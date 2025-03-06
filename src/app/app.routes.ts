import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  { path: 'search/:searchItem', component: HomeComponent },
  { path: 'tag/:tag', component: TagsComponent }, // ✅ HomeComponent가 아니라 TagsComponent에 연결!
];

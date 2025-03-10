import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';
import { FoodpageComponent } from './foodpage/foodpage.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // ✅ 기본 경로
  { path: 'home', component: HomeComponent },
  { path: 'search/:searchItem', component: HomeComponent },
  { path: 'tag/:tag', component: TagsComponent }, // ✅ TagsComponent로 연결
  {
    path: 'foodpage/:id',
    component: FoodpageComponent
  },
];

export const appRouter = provideRouter(routes);

import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search/:searchItem', component: HomeComponent },
  { path: 'tag/:tag', component: TagsComponent }, 
  {
    path: 'cart-page',
    loadComponent: () => import('./cart-page/cart-page.component').then(m => m.CartPageComponent) // ✅ standalone 컴포넌트는 이렇게 불러와야 함
  },  {
    path: 'foodpage/:id',
    component: FoodpageComponent
  },
];

export const appRouter = provideRouter(routes);

import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  

  constructor() { }

  getAll():Foods[] {
    return [
      { //food.service.ts에서 food 객체 가져옴 
        id: 1,
        name: 'Tonkatsu curry',
        price: 12,
        cookTime: '30-40',
        favorite: false,
        origins: ['Japan'],
        star: 4.5,
        imageUrl: 'assets/images/food1.jpg',
        tags: ['FastFood', 'Tonkatsu curry']
      },
      {
        id: 2,
        name: 'kyudong',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Osaka', 'Japan'],
        star: 3.0,
        imageUrl: 'assets/images/food2.jpg',
        tags: ['Meat', 'rice']
      },
      {
        id: 3,
        name: 'Chicken Skewers',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Shibuya', 'Japan'],
        star: 3.0,
        imageUrl: 'assets/images/food3.jpg',
        tags: ['chicken', 'single']
      },
      {
        id: 4,
        name: 'Sushi',
        price: 11,
        cookTime: '30-40',
        favorite: false,
        origins: ['Kyoto', 'Japan'],
        star: 3.0,
        imageUrl: 'assets/images/food4.jpg',
        tags: ['rice', 'single']
      },
      {
        id: 5,
        name: 'Green tea set',
        price: 11,
        cookTime: '20-40',
        favorite: false,
        origins: ['Korea', 'Asia'],
        star: 3.0,
        imageUrl: 'assets/images/food5.jpg',
        tags: ['tea', 'health']
      },
      {
        id: 6,
        name: 'Udon',
        price: 11,
        cookTime: '30-40',
        favorite: false,
        origins: ['Kobe', 'Japan'],
        star: 3.0,
        imageUrl: 'assets/images/food6.jpg',
        tags: ['noddle', 'Soup']
      },
      {
        id: 7,
        name: 'Salt Ramen',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Shinjuku', 'Japan'],
        star: 3.0,
        imageUrl: 'assets/images/food7.jpg',
        tags: ['noddle', 'Soup']
      },
      {
        id: 8,
        name: 'Soy sauce ramen',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Kyoto', 'Japan'],
        star: 3.0,
        imageUrl: 'assets/images/food8.jpg',
        tags: ['noddle', 'Soup']
      },
    ];
  }
}

import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    const result =
      tag === 'All'
        ? this.getAll()
        : this.getAll().filter((food) => (food.tags ?? []).includes(tag));

    return result;
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'curry', count: 1 },
      { name: 'noodle', count: 3 },
      { name: 'tea', count: 1 },
      { name: 'Meat', count: 1 },
      { name: 'Soup', count: 3 },
      { name: 'single', count: 2 },
      { name: 'rice', count: 1 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Tonkatsu curry',
        price: 12,
        cookTime: '30-40',
        favorite: false,
        origins: ['Japan'],
        star: 4.5,
        imageUrl: 'assets/images/food1.jpg',
        tags: ['curry', 'Tonkatsu'],
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
        tags: ['Meat', 'rice'],
      },
      {
        id: 3,
        name: 'Chicken Skewers',
        price: 8.6,
        cookTime: '40-50',
        favorite: false,
        origins: ['Shibuya', 'Japan'],
        star: 3.0,
        imageUrl: 'assets/images/food3.jpg',
        tags: ['chicken', 'single'],
      },
      {
        id: 4,
        name: 'Sushi',
        price: 13.5,
        cookTime: '30-40',
        favorite: false,
        origins: ['Kyoto', 'Japan'],
        star: 3.0,
        imageUrl: 'assets/images/food4.jpg',
        tags: ['rice', 'single'],
      },
      {
        id: 5,
        name: 'Green tea set',
        price: 13,
        cookTime: '20-40',
        favorite: false,
        origins: ['Korea', 'Asia'],
        star: 3.0,
        imageUrl: 'assets/images/food5.jpg',
        tags: ['tea', 'health'],
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
        tags: ['noodle', 'Soup'],
      },
      {
        id: 7,
        name: 'Salt Ramen',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Shinjuku', 'Japan'],
        star: 3.0,
        imageUrl: 'assets/images/food7.jpg',
        tags: ['noodle', 'Soup'],
      },
      {
        id: 8,
        name: 'Soy sauce ramen',
        price: 11.5,
        cookTime: '40-50',
        favorite: false,
        origins: ['Kyoto', 'Japan'],
        star: 3.0,
        imageUrl: 'assets/images/food8.jpg',
        tags: ['noodle', 'Soup'],
      },
    ];
  }
}

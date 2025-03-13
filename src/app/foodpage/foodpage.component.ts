import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';
import { TagsComponent } from '../tags/tags.component';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'],
  imports: [CommonModule, StarRatingModule, TagsComponent],
})
export class FoodpageComponent implements OnInit {
  [x: string]: any;
  foodId!: number;
  food!: Foods;
  filteredTags: string[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService, private cartService:CartService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.foodId = +params['id'];
        this.food = this.foodService.getFoodById(this.foodId);
        console.log("선택된 음식:", this.food);  
        this.filteredTags = this.food.tags || [];
      }
    });
  }

  filterTagsByImage(): void {
    this.filteredTags = this.food.tags || [];
  }

  addToCart(){
    console.log("장바구니에 추가된 음식:", this.food);  // ✅ 음식 데이터 확인
    this.cartService.addToCart(this.food);
    console.log("장바구니 목록:", this.cartService.items);  // ✅ 장바구니 데이터 확인
    this.router.navigateByUrl('/cart-page');
  }
}

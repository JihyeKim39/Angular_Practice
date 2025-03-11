import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';
import { TagsComponent } from '../tags/tags.component'; // StarRatingModule 임포트

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'],
  imports: [CommonModule, StarRatingModule, TagsComponent], // 여기에서 StarRatingModule을 추가
})
export class FoodpageComponent implements OnInit {
  [x: string]: any;
  foodId!: number;
  food!: Foods;
  filteredTags: string[] = []; // 태그 필터링 배열

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.foodId = +params['id'];
        this.food = this.foodService.getFoodById(this.foodId);
        this.filteredTags = this.food.tags || []; 
      }
    });
  }
  
  filterTagsByImage(): void {
    this.filteredTags = this.food.tags || [];
  }
}

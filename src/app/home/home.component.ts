import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { StarRatingModule } from 'angular-star-rating';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, StarRatingModule, SearchComponent, TagsComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // CUSTOM_ELEMENTS_SCHEMA 추가
})

export class HomeComponent implements OnInit {
  tag: string = '';
  foods: Foods[] = [];
food: any;

  constructor(private route: ActivatedRoute, private fs: FoodService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.tag = params['tag'] || '';
      if (params['searchItem']) {
        this.foods = this.fs
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
      } else if (params['tag']) {
        this.filterByTag(params['tag']);
      } else {
        this.foods = this.fs.getAll();
      }
    });
  }

  filterByTag(tag: string) {
    this.foods = [...this.fs.getAllFoodByTag(tag)];
  }

  // ✅ 좋아요 기능 구현
  toggleFavorite(food: Foods) {
    food.favorite = !food.favorite; // 상태 토글
  }
}

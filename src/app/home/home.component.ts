import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { StarRatingModule } from 'angular-star-rating'; 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  // standalone: true, // ✅ Standalone Component 사용
  imports: [CommonModule, StarRatingModule,SearchComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // CUSTOM_ELEMENTS_SCHEMA 추가
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  rating = 3.5;

  constructor(private fs: FoodService, private route :ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // params['searchItem']이 존재하면 필터링, 없으면 모든 데이터 가져오기
      if (params['searchItem']) {
        this.foods = this.fs.getAll().filter(food =>
          food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
        );
      } else {
        this.foods = this.fs.getAll(); // ✅ 데이터 가져오기
      }
      console.log(this.foods); // 필터링된 foods를 출력
    });

    // 데이터가 제대로 있는지 확인 (로딩 후 출력하도록 위치 변경)
    // console.log(this.fs.getAll());  // 이 부분은 실제로 데이터를 로드한 후 확인해야 함
  }

  toggleFavorite(food: any) {
    food.favorite = !food.favorite; // 클릭하면 favorite 값 변경
  }
}

export const prerender = false;
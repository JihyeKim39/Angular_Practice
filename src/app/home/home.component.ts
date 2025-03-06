import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { StarRatingModule } from 'angular-star-rating';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-home',
  standalone: true, // ✅ Standalone Component 사용
  imports: [CommonModule, StarRatingModule, SearchComponent, TagsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // CUSTOM_ELEMENTS_SCHEMA 추가
})
export class HomeComponent implements OnInit {
  toggleFavorite(_t12: Foods) {
    throw new Error('Method not implemented.');
  }
  tag: string = '';
  foods: Foods[] = []; // ✅ 타입을 Foods[]로 명확하게 지정

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
        console.log('search');
        this.filterByTag(params['tag']); // ✅ 필터링 함수로 처리
      } else {
        this.foods = this.fs.getAll();
        console.log("check")
        // this.filterByTag(params['tag']);
      }
      // console.log('현재 태그:', this.tag);
      // console.log('필터링된 foods:', this.foods);
    });
  }

  // ✅ 태그 필터링 함수 추가
  filterByTag(tag: string) {
    // console.log('현재 태그 클릭됨:', tag);
    this.foods = [...this.fs.getAllFoodByTag(tag)]; // ✅ 새로운 배열로 할당 (변경 감지)
    // console.log('필터링된 foods:', this.foods);
  }
}

import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-tags',
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];
  filteredFoods: Foods[] = []; // 필터링된 음식 목록 저장

  constructor(private fs: FoodService) {}

  ngOnInit(): void {
    this.tags = this.fs.getAllTag();
    // console.log('태그 데이터:', this.tags);
  }

  filterByTag(tag: string) {
    // console.log(`현재 태그 클릭됨: ${tag}`);
    this.filteredFoods = this.fs.getAllFoodByTag(tag);
    // console.log('필터링된 foods:', this.filteredFoods);
  }
}

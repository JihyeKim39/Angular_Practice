import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-tags',
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
filterByTag(arg0: string) {
throw new Error('Method not implemented.');
}
  @Input() foodPageTags?: string[];  // foodPageTags를 입력으로 받아옵니다.
  tags: Tag[] = [];
  @Output() tagSelected = new EventEmitter<string>();
  filteredTags: any;
  food: any;

  constructor(private fs: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags) {
      this.tags = this.fs.getAllTag();
    }
  }

  filterTagsByImage(): void {
    // 음식에 해당하는 태그만 필터링
    this.filteredTags = this.food.tags || [];
    console.log('Filtered Tags:', this.filteredTags);  // 디버깅을 위한 로그
  }
}

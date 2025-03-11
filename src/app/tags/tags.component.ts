import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Input() foodPageTags?: string[]; // foodPageTags를 입력으로 받아옴
  @Output() tagSelected = new EventEmitter<string>(); // 태그 선택 이벤트

  tags: Tag[] = [];

  constructor(private fs: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags) {
      this.tags = this.fs.getAllTag();
    }
  }

  // 태그 필터링 메서드 추가
  filterByTag(tagName: string): void {
    console.log(`Tag clicked: ${tagName}`); // 디버깅용 로그
    this.tagSelected.emit(tagName); // 부모 컴포넌트로 선택된 태그 전달
  }
}

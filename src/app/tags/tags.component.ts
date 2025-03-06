import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() tagSelected = new EventEmitter<string>();

  constructor(private fs: FoodService) {}

  ngOnInit(): void {
    this.tags = this.fs.getAllTag();
  }

  filterByTag(tag: string) {
    this.tagSelected.emit(tag);
  }
}
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
  @Input() foodPageTags?: string[];
  @Input()
  justifyContent:string ='center' 
  @Output() tagSelected = new EventEmitter<string>(); 

  tags: Tag[] = [];

  constructor(private fs: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags) {
      this.tags = this.fs.getAllTag();
    }
  }

  filterByTag(tagName: string): void {
    console.log(`Tag clicked: ${tagName}`); 
    this.tagSelected.emit(tagName); 
  }
}

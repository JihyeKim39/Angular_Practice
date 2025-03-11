import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <input type="text" placeholder="Search Food" [(ngModel)]="searchItem" />
      <button (click)="search()">Search Food</button>
    </div>
  `,
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchItem: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchItem = params['searchItem'] || '';
    });
  }

  search(): void {
    // ✅ 검색 버튼 클릭 시, 현재 입력값을 URL에 반영
    this.router.navigate(['/search', this.searchItem]);

    if (this.searchItem)
      this.router.navigateByUrl('/search/' + this.searchItem);
  }
}

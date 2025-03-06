import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule], // ✅ Standalone Component 방식이므로 imports에 추가
  template: `
    <div>
      <input type="text" placeholder="Search Food" [(ngModel)]="searchItem" />
      <button (click)="search()">Search Food</button>
    </div>
  `,
  styleUrls: ['./search.component.css'], // ✅ 스타일 유지
})
export class SearchComponent implements OnInit {
  searchItem: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // ✅ URL 파라미터에서 'searchItem' 가져오기 (없으면 빈 문자열)
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],  // 수정: styleUrls로 수정 (styleUrl이 아닌)
})
export class SearchComponent implements OnInit {
  searchItem: string = '';  // 초기값을 빈 문자열로 설정

  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    // route.params에서 'searchItem'을 가져오고 없으면 빈 문자열로 설정
    this.route.params.subscribe((params) => {
      this.searchItem = params['searchItem'] || '';  // 없으면 빈 문자열로 설정
    })
  }

  search():void{

  }

}

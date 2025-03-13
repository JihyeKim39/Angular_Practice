import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})

export class CartPageComponent implements OnInit {
  changeQuantity(arg0: any[], _t13: HTMLSelectElement) {
    throw new Error('Method not implemented.');
  }
  cartItems: any[] = []; // ✅ 빈 배열로 초기화

  constructor(private cartService: CartService) {} // ✅ CartService 주입

  ngOnInit() {
    this.cartItems = this.cartService.items; // ✅ 장바구니 데이터 가져오기
    console.log('장바구니 페이지에서 가져온 아이템:', this.cartItems); // ✅ 디버깅 로그

  }
}

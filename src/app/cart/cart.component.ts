import { Component } from '@angular/core';
import { CartService } from '../servises/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  public cartItems: any[] = [];
  public totalPrice = 0;
  public empty = true;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCart();
    console.log(this.cartItems);

    if (this.cartItems.length != 0) {
      this.empty = false;
    }
    this.calculateTotalPrice();
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCart();
    if (this.cartItems.length === 0) {
      this.empty = true;
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}

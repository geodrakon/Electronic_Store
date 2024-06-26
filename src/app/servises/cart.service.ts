import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {}

  addToCart(product: any) {
    this.cart.push(product);
    console.log('Add to cart:', product);
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    console.log('Remove:', index);
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cart.forEach((item) => {
      totalPrice += item.price.current;
    });
    return totalPrice;
  }
}

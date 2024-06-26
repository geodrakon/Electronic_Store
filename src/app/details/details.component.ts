import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../servises/http.service';
import { CartService } from '../servises/cart.service';
import { DetailService } from '../servises/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  public selectedProduct!: any;
  public add = true;

  constructor(public route: ActivatedRoute, public service: HttpService, private cartService: CartService, private detailService: DetailService) {
    this.selectedProduct = this.detailService.getProduct();
    console.log(this.selectedProduct);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.add = false;
  }
}

import { Component } from '@angular/core';
import { HttpService } from '../servises/http.service';
import { DetailService } from '../servises/detail.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  public minPrice: string = '';
  public maxPrice: string = '';
  public keyWord: string = '';
  public category: string = '';

  public productList: any[] = [];
  public selectedProduct!: any;

  constructor(private service: HttpService, private detail: DetailService) {
    this.service
      .search('', '', '1', '10000')
      .subscribe((info: any) => (this.productList = info.products));
  }

  chooseLeptop() {
    this.category = '1';
    this.filter();
  }
  choosePhone() {
    this.category = '2';
    this.filter();
  }
  chooseAll() {
    this.category = '';
    this.filter();
  }

  filter() {
    if (!this.minPrice) {
      this.minPrice = '1';
    }
    if (!this.maxPrice) {
      this.maxPrice = '10000';
    }

    this.service
      .search(this.keyWord, this.category, this.minPrice, this.maxPrice)
      .subscribe((data: any) => {
        console.log(data);
        this.productList = data.products;
      });
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    console.log(this.selectedProduct);

    this.detail.setProduct(product);
  }
}

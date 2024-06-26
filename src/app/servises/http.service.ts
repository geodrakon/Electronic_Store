import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  search(
    keyWord: string,
    category: string,
    minPrice: string,
    maxPrice: string
  ) {
    return this.http.get(
      `https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50&keywords=${keyWord}&category_id=${category}&price_min=${minPrice}&price_max=${maxPrice}`
    );
  }
}

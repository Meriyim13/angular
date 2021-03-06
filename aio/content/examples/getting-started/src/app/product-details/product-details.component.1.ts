// #docplaster
// #docregion imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
// #enddocregion imports

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
// #docregion props-methods, add-to-cart, product-prop
export class ProductDetailsComponent implements OnInit {
  product;
  // #enddocregion product-prop

  constructor(
    private route: ActivatedRoute,
  ) { }

  // #enddocregion props-methods
  // #docregion get-product
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  // #docregion product-prop
  }
  // #enddocregion product-prop
  // #enddocregion get-product
  // #docregion props-methods
}

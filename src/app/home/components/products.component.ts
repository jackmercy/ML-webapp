import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: Object[];

  constructor() { }

  ngOnInit() {
      this.items = [
          {
              name: 'Book',
              price: '1100',
              rating: 1.0,
              brief: 'this is book'
          },
          {
              name: 'Book2',
              price: '1200',
              rating: 2.0,
              brief: 'this is book2'
          },
          {
              name: 'Book',
              price: '1200',
              rating: 3.0,
              brief: 'this is book3'
          }
      ];
  }

}

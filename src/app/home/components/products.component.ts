import { Component, OnInit } from '@angular/core';
import { CoreService } from "../../core/services/core.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: Object[];

  constructor(private _coreService: CoreService) { }

  ngOnInit() {
      this._coreService.getProducts().subscribe(
          data => {this.items = data; console.log(data); },
          error => console.log(error)
      );
  }

}

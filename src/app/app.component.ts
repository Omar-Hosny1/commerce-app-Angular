import { Component, OnInit } from '@angular/core';
import { ProductsService } from './shop/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.__getProducts__();
  }
}

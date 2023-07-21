import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProducrRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private productRepo: ProducrRepository){

  }
  getProducts(): Product[]{
    return this.productRepo.getProducts();
  }
  deleteProduct(p: Product){
    this.productRepo.deleteProduct(p);
  }
}

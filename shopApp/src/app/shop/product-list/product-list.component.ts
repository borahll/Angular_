import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  selectedProduct: Product | undefined;
  constructor(private cart: Cart, private router: Router){

  }
  addProductToCart(product:Product){
    this.cart.addItem(product);
    this.router.navigateByUrl("/cart");
  }
  displayDetails(p: Product){
    this.selectedProduct = p;
  }
  hideDetails(){
    this.selectedProduct = undefined;
  }
}

import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart{
    public items: CartItem[] = [];
    public itemCount: number = 0;
    public total: number = 0;
    addItem(product: Product, count: number = 1){
        let item = this.items.find(p => p.product.id == product.id);
        if(item != undefined){
            item.quantity += count;
        }
        else{
            this.items.push(new CartItem(product, count));
            this.calculate();
        }
    }
    calculate(){
        this.itemCount = 0;
        this.total = 0;
        this.items.forEach(item =>{
            this.itemCount += item.quantity;
            if(item.product.price){
                this.total += parseInt(item.product.price)*item.quantity;
            }
        })
    }
    clear(){
        this.itemCount = 0;
        this.items = [];
        this.total = 0;
    }
    removeItem(productId: number){
        let index = this.items.findIndex(p => p.product.id == productId);
        this.items.splice(index, 1);
        this.calculate();
    }
    updateQuantity(product: Product, quantity: number){
        this.items.find(p => p.product.id == product.id)?.quantity? quantity: undefined;
        this.calculate();
    }
}
class CartItem{
     constructor(public product: Product,
        public quantity: number){

     }
}
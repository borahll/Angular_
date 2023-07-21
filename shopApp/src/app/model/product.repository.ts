import { Injectable, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { RestService } from "./rest.service";
import { Category } from "./category.model";

@Injectable()
export class ProducrRepository implements OnInit{
    private _products: Product[] = [];
    constructor(private restService: RestService){
        this.restService.getProducts().subscribe(products => this._products = products);
    }
    ngOnInit(): void {
    }
    getProduct(id: number): Product | undefined{
        return this._products.find(i => i.id == id);
    }
    getProducts(): Product[]{
        return this._products;
    }
    getCategory(category: Category | null = null): Product[]{
        if(category){
            return this._products.filter(p => p.category == category);
        }
        return this._products;
    }
    saveProduct(product: Product){
        if(product.id == null || product.id == undefined || product.id == 0){
            this.restService.addProduct(product)
            .subscribe(p=> this._products.push(p));
        }else{
            this.restService.updateProduct(product)
            .subscribe(p=>{
                this._products.splice(this._products.findIndex( p => p.id == product.id), 1, product);
            
             })
        }
    }
    deleteProduct(product: Product){
        this.restService.deleteProduct(product)
        .subscribe(p => this._products.splice(this._products.findIndex(p=>p.id == product.id), 1));
    }
}
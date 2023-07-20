import { Component } from "@angular/core";
import { ProducrRepository } from "../model/product.repository";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";


@Component({
    selector: "shop",
    templateUrl: 'shop.component.html',
    styles: ['.pt-100 {padding-top:100px};']
})

export class ShopComponent{
    public selectedCategory: Category|undefined;
    public productsPerPage: number = 3;
    public selectedPage: number=1;
    public selectedProducts: Product[] = [];
    constructor(private productRepository: ProducrRepository, private categoryRepository: CategoryRepository, private cart: Cart, private router: Router){
        
    }
    getAllProducts(): Product[]{
        return this.productRepository.getProducts();
    }
    getSomeProducts(): Product[]{
        let index = (this.selectedPage-1)*this.productsPerPage;
        this.selectedProducts = this.productRepository.getCategory(this.selectedCategory);
        return this.productRepository.getProducts()
                .slice(index, index + this.productsPerPage);

    }
    getCategories(): Category[]{
        return this.categoryRepository.getCategories();
    }
    changeCatagory(newCategory?: Category){
        this.selectedCategory = newCategory;
    }
    changePage(pageNum: number){
        this.selectedPage = pageNum;
    }
    getRange(length: number): number[] {
        return Array.from({ length }, (_, index) => index + 1);
    }

    changePageSize(valueOfPage: HTMLSelectElement){
        this.productsPerPage = parseInt(valueOfPage.value);
        this.selectedPage = 1; 
    }
}
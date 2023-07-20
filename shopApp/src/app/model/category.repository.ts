import { Injectable, OnInit } from "@angular/core";
import { RestService } from "./rest.service";
import { Category } from "./category.model";

@Injectable()
export class CategoryRepository implements OnInit{
    private _categories: Category[] = [];
    constructor(private restService: RestService){
        this.restService.getCategories().subscribe(products => this._categories = products);
    }
    ngOnInit(): void {
    }
    getCategory(id: string): Category | undefined{
        return this._categories.find(i => i.id == id);
    }
    getCategories(): Category[]{
        return this._categories;
    }
}
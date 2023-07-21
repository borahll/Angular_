import { Injectable, OnInit } from "@angular/core";
import { RestService } from "./rest.service";
import { Category } from "./category.model";

@Injectable()
export class CategoryRepository implements OnInit{
    private _categories: Category[] = [];
    constructor(private restService: RestService){
        this.restService.getCategories().subscribe(categorys => this._categories = categorys);
    }
    ngOnInit(): void {
    }
    getCategory(id: string): Category | undefined{
        return this._categories.find(i => i.id == id);
    }
    getCategories(): Category[]{
        return this._categories;
    }
    saveCategory(category: Category){
        if(category.id == null || category.id == undefined || parseInt(category.id) == 0){
            this.restService.addCategory(category)
            .subscribe(p=> this._categories.push(p));
        }else{
            this.restService.updateCategory(category)
            .subscribe(p=>{
                this._categories.splice(this._categories.findIndex( p => p.id == category.id), 1, category);
            
             })
        }
    }
    deleteCategory(category: Category){
        this.restService.deleteCategory(category)
        .subscribe(p => this._categories.splice(this._categories.findIndex(p=>p.id == category.id), 1));
    }
}
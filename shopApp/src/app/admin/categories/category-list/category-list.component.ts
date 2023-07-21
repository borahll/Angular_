import { Component } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  constructor(private repo: CategoryRepository){}
  deleteCategory(c: Category) {
    this.repo.deleteCategory(c);
  }
  getCategories(): Category[] {
    return this.repo.getCategories();
  }

}

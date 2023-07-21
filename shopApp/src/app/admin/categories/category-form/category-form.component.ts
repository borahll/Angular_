import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  editing: boolean = false;
  category: Category | undefined = new Category();
  constructor(private route: ActivatedRoute, private repo: CategoryRepository, private router: Router){
    this.editing = route.snapshot.params['mode'] == 'edit';
    console.log(this.editing);
    if(this.editing && this.category !=undefined){
      this.category = this.repo.getCategory(route.snapshot.params['id']);
    }
  }
  save(form: NgForm){
    this.repo.saveCategory(<Category>this.category);
    this.router.navigateByUrl('/admin/main/categories');
  }
}

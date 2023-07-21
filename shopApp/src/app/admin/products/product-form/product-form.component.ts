import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProducrRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  editing: boolean = false;
  product: Product | undefined = new Product();
  constructor(private route: ActivatedRoute, private repo: ProducrRepository, private router: Router){
    this.editing = route.snapshot.params['mode'] == 'edit';
    console.log(this.editing);
    if(this.editing && this.product !=undefined){
      this.product = this.repo.getProduct(route.snapshot.params['id']);
    }
  }
  save(form: NgForm){
    this.repo.saveProduct(<Product>this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}

import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RestService } from "./rest.service";
import { ProducrRepository } from "./product.repository";
import { CategoryRepository } from "./category.repository";
import { Cart } from "./cart.model";

@NgModule({
    imports: [HttpClientModule],
    providers: [RestService, ProducrRepository, CategoryRepository, Cart]
})
export class ModelModule{}
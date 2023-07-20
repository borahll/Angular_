import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';
import { Order } from './order.model';

@Injectable()
export class RestService{
  baseUrl: string = "http://localhost:3000/";
  token: string = "";
  constructor(private http: HttpClient){

  }
  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl + 'products');
  }
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl + 'products');
  }
  saveOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }
  authentication(name: string, password: string): Observable<boolean>{
    return this.http.post<any>(this.baseUrl + 'login', {username:name, password:password}).pipe(map(response =>{
      this.token = response.success ? response.token : "";
      return response.success; 
    }));
  }
}
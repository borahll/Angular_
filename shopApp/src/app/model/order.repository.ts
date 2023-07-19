import { Observable } from "rxjs";
import { Order } from "./order.model";
import { RestService } from "./rest.service";
import { Injectable } from "@angular/core";


@Injectable()
export class OrderRepository{
    private __orders: Order[] = [];
    constructor(private restService: RestService){

    }
    getOrders():Order[]{
        return this.__orders;
    }
    saveOrder(order: Order): Observable<Order>{
        return this.restService.saveOrder(order);
    }
}
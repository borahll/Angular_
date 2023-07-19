import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{
    public id: number = 0;
    public name: string = "";
    public address: string = "";
    public city: string = "";
    public phone: string = "";
    public email: string = "";
    public isSent: boolean = false;
    constructor(public cart: Cart){}
    clear(){
        this.address = "";
        this.city = "";
        this.phone = "";
        this.email = "";
        this.isSent = false;
        this.name = "";
        this.id = 0;
        this.cart.clear();
    }
}
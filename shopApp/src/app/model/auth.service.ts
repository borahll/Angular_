import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthService{
    constructor(private restService: RestService){

    }
    authenticate(username: string, password: string): Observable<boolean>{
        console.log(this.restService.authentication(username, password));
        return this.restService.authentication(username, password);
    }
    get authenticated(): boolean{
        return this.restService.token != "";
    }
    clear(){
        this.restService.token = "";
    }
}
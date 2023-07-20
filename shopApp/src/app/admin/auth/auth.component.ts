import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public username: string = "";
  public password: string = "";
  public errorMessage:string = "";
  constructor(private router: Router){

  }
  login(form: NgForm){
    if(form.valid){
      if(this.username == 'admin' && this.password == "loooo"){
        this.router.navigateByUrl('/admin/main');
      }
      else{
        this.errorMessage = "unauthorized";
      }
    }
    else{
      this.errorMessage = "invalid form";
    }
  }
}

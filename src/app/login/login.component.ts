import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';
import {LoginService} from '../services/login.service';
import { FormBuilder} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userName;
   passWord;
   constructor(
     private _LoginService : LoginService,
     private  router1: Router
    ){
    }
  ngOnInit() {}
  submit(value :any){
    this.router1.navigate(['/dashboard']);
    this.userName=value.userName;
    this.passWord=value.password;
    console.log("this.userName"+this.userName);
    console.log("this.passWord"+this.passWord);
    //prepaire body
    let body = {
      username:  this.userName,
      password:  this.passWord
    };
    //calling login servces mathode
    console.log("data body"+body);
    
    this._LoginService.login(body).subscribe(data=>{
      console.log(data+" :-responce return")
      //  this.router.navigate(['/dashboard']);
    },
    error =>{
      console.log(error);
    }
  )
  }

}

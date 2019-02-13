import { Component, OnInit } from '@angular/core';
import {SignupService} from '../services/signup.service';
@Component({
 selector: 'app-signup',
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


 suffix;
 firstname;
 
 middlename;
 lastname;
 gender;
 dob;
 doj;
 Email;
 cn;
 Title;
 Location;
 From;
 To;
 Description;
 State;
 country;
 city;
 street1;
 street2;
 pin;
 Skill;
 password;
 confirmpassword;

 constructor(
   private _SignupService : SignupService,
   // private  router1: Router
   ){
   }


 ngOnInit() {

 }
 submit(value :any){
   // this.router1.navigate(['/dashboard']);
   this.suffix=value.suffix;
   this.firstname=value.firstname;
   this.middlename=value.middlename;
   this.lastname=value.lastname;


   let body = {
     firstname : value.FirstName,
     suffix: value.suffix,
     middlename: value.middlename,
     lastname: value.lastname,
     gender:   value.gender,
     dob: value.DOB,
     doj: value.DOJ,
     Email: value.Email,
     country: value.country,
     State: value.State,
     city: value.city,
     street1: value.street1,
     street2: value.street2,
     pin: value.pin,
     Title: value.Title,
     cn: value.cn,
     location: value.location,
     from: value.From,
     Description:value.Description,
   }

   this._SignupService.signup(body).subscribe(data=>{

   },
   error =>{
     console.log(error);
   })


   this.firstname=value.FirstName
   this.suffix=value.suffix
   this.middlename=value.MiddleName
   this.lastname=value.LastName
   this.gender=value.gender
   this.dob=value.DOB
   this.dob=value.DOJ
   this.dob=value.cn
   this.dob=value.Title
   this.dob=value.Location
   this.dob=value.From
   this.dob=value.To
   this.dob=value.Description
   this.dob=value.State
   this.dob=value.country
   this.dob=value.city
   this.dob=value.street1
   this.dob=value.street2
   this.dob=value.pin
   this.Email=value.Email
   this.Email=value. Skill
   this.password=value.password
   this.confirmpassword=value.confirmpassword

}
}

// console.log("data co"+value.suffix);
// console.log("data co"+value.FirstName);
// console.log("data co"+value.MiddleName);
// console.log("data co"+value.LastName);
// console.log("data co"+value.gender);
// console.log("data co"+value.DOB);
// console.log("data co"+value.DOJ);
// console.log("data co"+value.Email);
// console.log("data co"+value.cn);
// console.log("data co"+value.Title);
// console.log("data co"+value.location);
// console.log("data co"+value.From);
// console.log("data co"+value.To);
// console.log("data co"+value.Description);
// console.log("data co"+value.Skill);
// console.log("data co"+value.country);
// console.log("data co"+value.State);
// console.log("data co"+value.city);
// console.log("data co"+value.Street1);
// console.log("data co"+value.Street2);
// console.log("data co"+value.pin);
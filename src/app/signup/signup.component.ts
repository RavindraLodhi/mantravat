import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname;
  suffix;
  middlename;
  lastname;
  gender;
  age;
  Email;
  date;
  month;
  year;
  password;
  confirmpassword
 
  constructor(
 
  )
   { }
  ngOnInit() {
 
  }
  submit(value :any){
    this.firstname=value.FirstName
    this.suffix=value.suffix
    this.middlename=value.MiddleName
    this.lastname=value.LastName
    this.gender=value.gender
    this.age=value.Age
    this.Email=value.Email
    this.date=value.Date
    this.month=value.month
    this.year=value.year
    this.password=value.password
    this.confirmpassword=value.confirmpassword
 
    // console.log("this.FirstName"+this.FirstName);
    console.log(value);
 
   console.log("mathod running");
 
 
 
 
 }
}

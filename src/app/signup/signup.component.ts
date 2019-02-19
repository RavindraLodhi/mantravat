import { Component, OnInit } from '@angular/core';
import {SignupService} from '../services/signup.service';
import { Console } from '@angular/core/src/console';
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
 college;
   unvercitypg;
   collegepg;
  Degreepg;
  percentagepg;
  frompg;
  topg ;
  certificatepg ;
  collegeug ;
  unvercityug;
  Degreeug ;
  percentageug ;
  fromug;
  toug;
  certificateug;
  college12;
  unvercity12;
  Degree12;
  percentage12;
  from12;
  to12;
  certificate12;
  college10;
  unvercity10;
  Degree10;
  percentage10;
  from10;
  to10;
  certificate10;
 

 constructor(
   private _SignupService : SignupService,
   // private  router1: Router
   ){
   }
   fun()
{
  
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
     middlename: value.middleName,
     lastname: value.lastName,
     gender:   value.gender,
     dob: value.DOB,
     doj: value.DOJ,
     Email: value.Email,
     country: value.country,
     State: value.State,
     city: value.city,
     street1: value.Street1,
     street2: value.Street2,
     pin: value.pin,

     countryp: value.countryp,
     Statep: value.Statep,
     cityp: value.cityp,
     street1p: value.Street1p,
     street2p: value.Street2p,
     pinp: value.pinp,
    
     unvercitypg:value.universitypg,
    collegepg:value.collegepg,
    Degreepg:value.Degreepg,
    percentagepg:value.percentagepg,
    frompg:value.frompg,
    topg:value.topg ,
    certificatepg:value.Certificatepg,

    unvercityug:value.universityug,
    collegeug:value.collegeug,
    Degreeug:value.Degreeug,
    percentageug:value.percentageug,
    fromug:value.fromug,
    toug:value.toug ,
    certificateug:value.Certificateug,

    unvercity12:value.university12,
    college12:value.college12,
    Degree12:value.Degree12,
    percentage12:value.percentage12,
    from12:value.from12,
    to12:value.to12 ,
    certificate12:value.Certificate12,

    unvercity10:value.universityug,
    college10:value.college10,
    Degree10:value.Degree10,
    percentage10:value.percentage10,
    from10:value.from10,
    to10:value.to10 ,
    certificate10:value.Certificate10,

    title:value.Title,
    cn:value.cn,
    location:value.location,
    from:value.From,
    to:value.To,
    Description:value.Description,
    file1:value.fileupload1,
    file2:value.fileupload2,
    file3:value.fileupload3,

    title1:value.Title1,
    cn1:value.cn1,
    location1:value.location1,
    from1:value.From1,
    to1:value.To1,
    Description1:value.Description1,
    file11:value.fileupload11,
    file12:value.fileupload12,
    file13:value.fileupload13,

    Skill:value.Skill,



    password:value.password,
    confirmpassword:value.confirmpassword,
    
  
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
   this.doj=value.DOJ
  //  this.dob=value.cn
  //  this.dob=value.Title
  //  this.dob=value.Location
  //  this.dob=value.From
  //  this.dob=value.To
  //  this.dob=value.Description
  //  this.dob=value.State
  //  this.dob=value.country
  //  this.dob=value.city
  //  this.dob=value.street1
  //  this.dob=value.street2
  //  this.dob=value.pin
   this.Email=value.Email
  // this.Email=value. Skill
   this.password=value.password
   this.confirmpassword=value.confirmpassword

//pg data
//    this.collegepg=value.collegepg;
//    this.unvercitypg=value.unvercitypg;
//    this.Degreepg=value.Degreepg;
//    this.percentagepg=value.percentagepg;
//    this.frompg=value.frompg;
//    this.topg=value.topg;
//    this.certificatepg=value.Certificatepg;
// // ug data
//    this.collegeug=value.collegeug;
//    this.unvercityug=value.unvercityug;
//    this.Degreeug=value.Degreeug;
//    this.percentageug=value.percentageug;
//    this.fromug=value.fromug;
//    this.toug=value.toug;
//    this.certificateug=value.Certificateug;
// // puc data
//    this.college12=value.college12;
//    this.unvercity12=value.unvercity12;
//    this.Degree12=value.Degree12;
//    this.percentage12=value.percentage12;
//    this.from12=value.from12;
//    this.to12=value.to12;
//    this.certificate12=value.Certificate12;
// // 10th data
//    this.college10=value.college10;
//    this.unvercity10=value.unvercity10;
//    this.Degree10=value.Degree10;
//    this.percentage10=value.percentage10;
//    this.from10=value.from10;
//    this.to10=value.to10;
//    this.certificate10=value.Certificate10;

console.log(value);

   if(this.password==this.confirmpassword)
   {
    document.getElementById("demo3").innerHTML = "password  matched";
    document.getElementById("demo4").innerHTML = "";
   // document.getElementById('submit').disable = false;
   }
   else{
    document.getElementById("demo4").innerHTML = "password is not matching";
    document.getElementById("demo3").innerHTML = "";
   }
   if(this.password.length>=8  )
   {
    document.getElementById("demo5").innerHTML = "password is correct";
    document.getElementById("demo6").innerHTML = "";
   }
   else{
    document.getElementById("demo6").innerHTML = "password should atleast 8 chrachters ";
    document.getElementById("demo5").innerHTML = "";
   }
   console.log(value.Email)
   
   if(value.Email.match("/(\W|^)[\w.+\-]*@gmail\.com(\W|$)"))
   {
    document.getElementById("em1").innerHTML = "email is valid";
    document.getElementById("em2").innerHTML = "";
   }
   else
   {
    document.getElementById("em2").innerHTML = "email is not valid";
    document.getElementById("em1").innerHTML = "";
   }
  // if(dtCurrent.getFullYear()-this.dob.getFullYear() == 18)
  console.log(value.DOB.substr(0,4));
  console.log(new Date().getFullYear());
  console.log("hello");
  if(new Date().getFullYear()-value.DOB.substr(0,4)>=18)
  {
    document.getElementById("demo6").innerHTML = "Age is 18+";
    document.getElementById("demo7").innerHTML = "";
  }
  else{
    document.getElementById("demo7").innerHTML = "Age should be 18+";
    document.getElementById("demo6").innerHTML = "";
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
}
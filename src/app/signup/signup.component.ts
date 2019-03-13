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

//  if(value.suffix == ''){
//      console.log("suffix is null");
//      document.getElementById("suffix").style.border = "1px solid #FC0606";
     

//  }


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

//  console.log(value);
 console.log(value.DOJ);
 console.log(value.DOJ.substr(0,4));//year
 console.log(value.DOJ.substr(5,2));//month
 console.log(value.DOJ.substr(8,2));//date
 console.log(new Date().getFullYear());
 console.log(new Date().getMonth()+1);
 console.log(new Date().getDate());
// console.log(new Date());
// this.val(value);
 this.validation(value);

 }
//  val(value)
//  {
//   if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.Email)&& value.Email!="")
//   {
//    document.getElementById("em1").innerHTML = "email is valid";
//    document.getElementById("em2").innerHTML = "";
//    document.getElementById("em").style.border = "1px solid green";
//     return true;
//   }
//   else
//   {
//    document.getElementById("em2").innerHTML = "email is not valid";
//    document.getElementById("em1").innerHTML = "";
//    document.getElementById("em").style.border = "1px solid #FC0606";
//    document.getElementById("em").focus();
//    return false;
//   }
 
  
 
//  }

validation(value){
  var letters = /^[A-Za-z]+$/;
 // for suffix
  if(value.suffix.match(letters))
 {
 //alert('Your name have accepted : you can try another');
 document.getElementById("suffix").style.border = "1px solid green";

 }
 else
 {
 alert('Please input alphabet characters only for suffix');
 document.getElementById("suffix").style.border = "1px solid #FC0606";
 document.getElementById("suffix").focus();
 return false;
 

 }

 //for fristname
 var letters1 = /^[A-Za-z]+$/;
 if(value.FirstName.match(letters1))
 {
 //alert('Your name have accepted : you can try another');
 document.getElementById("fn").style.border = "1px solid green";
 }
 else
 {
 alert('Please input alphabet characters only for fristname');
 document.getElementById("fn").style.border = "1px solid #FC0606";
 document.getElementById("fn").focus();
 return false;
 }

 var letters1 = /^[A-Za-z]+$/;
 if(value.middleName.match(letters1))
 {
 //alert('Your name have accepted : you can try another');
 document.getElementById("mn").style.border = "1px solid green";
 }
 else
 {
 alert('Please input alphabet characters only middlename');
 document.getElementById("mn").style.border = "1px solid #FC0606";
 document.getElementById("mn").focus();
 return false;
 }

 var letters1 = /^[A-Za-z]+$/;
 if(value.lastName.match(letters1))
 {
 //alert('Your name have accepted : you can try another');
 document.getElementById("ln").style.border = "1px solid green";
 }
 else
 {
 alert('Please input alphabet characters only for lastname');
 document.getElementById("ln").style.border = "1px solid #FC0606";
 document.getElementById("ln").focus();
 return false;
 }
 if(new Date().getFullYear()-value.DOB.substr(0,4)>=18 && value.DOB!="")
 {
   document.getElementById("demo7").innerHTML = "Age is 18+";
   document.getElementById("demo8").innerHTML = "";
   document.getElementById("dob").style.border = "1px solid green";
   
 }
 else{
   document.getElementById("demo8").innerHTML = "Age should be 18+";
   document.getElementById("demo7").innerHTML = "";
   document.getElementById("dob").style.border = "1px solid #FC0606";
   document.getElementById("dob").focus();
   return false;
 }
 if(new Date().getFullYear()<=value.DOJ.substr(0,4) && new Date().getDate()<=value.DOJ.substr(8,2) &&  new Date().getMonth()+1<=value.DOJ.substr(5,2)&& value.DOJ!="")
 {
   document.getElementById("doj1").innerHTML = "DOJ is correct";
   document.getElementById("doj2").innerHTML = "";
   document.getElementById("doj").style.border = "1px solid green";
   
 }
 else{
   document.getElementById("doj2").innerHTML = "DOJ shoud be greater then current date";
   document.getElementById("doj1").innerHTML = "";
   document.getElementById("doj").style.border = "1px solid #FC0606";
   document.getElementById("doj").focus();
   return false;
 }
 if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.Email)&& value.Email!="")
  {
   document.getElementById("em1").innerHTML = "email is valid";
   document.getElementById("em2").innerHTML = "";
   document.getElementById("em").style.border = "1px solid green";

  }
  else
  {
   document.getElementById("em2").innerHTML = "email is not valid";
   document.getElementById("em1").innerHTML = "";
   document.getElementById("em").style.border = "1px solid #FC0606";
   document.getElementById("em").focus();
   return false;
  
  }
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.Emailc)&& value.Emailc!="")
  {
   document.getElementById("emc1").innerHTML = "email is valid";
   document.getElementById("emc2").innerHTML = "";
   document.getElementById("emc").style.border = "1px solid green";

  }
  else
  {
   document.getElementById("emc2").innerHTML = "email is not valid";
   document.getElementById("emc1").innerHTML = "";
   document.getElementById("emc").style.border = "1px solid #FC0606";
   document.getElementById("emc").focus();
   return false;
  }
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.Emailp)&& value.Emailp!="")
  {
   document.getElementById("emp1").innerHTML = "email is valid";
   document.getElementById("emp2").innerHTML = "";
   document.getElementById("emp").style.border = "1px solid green";

  }
  else
  {
   document.getElementById("emp2").innerHTML = "email is not valid";
   document.getElementById("emp1").innerHTML = "";
   document.getElementById("emp").style.border = "1px solid #FC0606";
   document.getElementById("emp").focus();
   return false;
  }
  if(this.password.length>=8 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.password) )
  {
   document.getElementById("demo5").innerHTML = "password is correct";
   document.getElementById("demo6").innerHTML = "";
   document.getElementById("p").style.border = "1px solid green";

  }
  else{
   document.getElementById("demo6").innerHTML = "password should haveMinimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character ";
   document.getElementById("demo5").innerHTML = "";
   document.getElementById("p").style.border = "1px solid #FC0606";
   document.getElementById("p").focus();
   return false;
  }
  

   if(this.password==this.confirmpassword && this.confirmpassword!="" )
  {
   document.getElementById("demo3").innerHTML = "password  matched";
   document.getElementById("demo4").innerHTML = "";
  // document.getElementById('submit').disable = false;
  document.getElementById("cp").style.border = "1px solid green";
  }
  else{
   document.getElementById("demo4").innerHTML = "password is not matching";
   document.getElementById("demo3").innerHTML = "";
   document.getElementById("cp").style.border = "1px solid #FC0606";
   document.getElementById("cp").focus();
   return false;
  }
  
  
 
  
 
  
 
 
}
myFunction() {
  var checkBox = (document.getElementById("myCheck") as HTMLInputElement);
  
  var aid=(document.getElementById("aidc")as HTMLInputElement).value;
  var mb1=(document.getElementById("mbn1c")as HTMLInputElement).value;
  var mb2=(document.getElementById("mbn2c")as HTMLInputElement).value;
  var email=(document.getElementById("emc")as HTMLInputElement).value;
  var country=(document.getElementById("coc")as HTMLInputElement).value;
  var State=(document.getElementById("sc")as HTMLInputElement).value;
  var city=(document.getElementById("ctc")as HTMLInputElement).value;
  var street1=(document.getElementById("st1c")as HTMLInputElement).value;
  var street2=(document.getElementById("st2c")as HTMLInputElement).value;
  var pin=(document.getElementById("pinc")as HTMLInputElement).value;
  if (checkBox.checked == true){
    (document.getElementById("aidp") as HTMLInputElement).value=aid;
    (document.getElementById("mbn1p")as HTMLInputElement).value=mb1;
    (document.getElementById("mbn2p")as HTMLInputElement).value=mb2;
    (document.getElementById("emp")as HTMLInputElement).value=email;
    (document.getElementById("cop")as HTMLInputElement).value=country;
    (document.getElementById("sp")as HTMLInputElement).value=State;
    (document.getElementById("ctp")as HTMLInputElement).value=city;
    (document.getElementById("st1p")as HTMLInputElement).value=street1;
    (document.getElementById("st2p")as HTMLInputElement).value=street2;
    (document.getElementById("pinp")as HTMLInputElement).value=pin;
    
  } else {
    (document.getElementById("aidp")as HTMLInputElement).value="";
    (document.getElementById("mbn1p")as HTMLInputElement).value="";
    (document.getElementById("mbn2p")as HTMLInputElement).value="";
    (document.getElementById("emp")as HTMLInputElement).value="";
    (document.getElementById("cop")as HTMLInputElement).value="";
    (document.getElementById("sp")as HTMLInputElement).value="";
    (document.getElementById("ctp")as HTMLInputElement).value="";
    (document.getElementById("st1p")as HTMLInputElement).value="";
    (document.getElementById("st2p")as HTMLInputElement).value="";
    (document.getElementById("pinp")as HTMLInputElement).value="";
  }
}

}


 
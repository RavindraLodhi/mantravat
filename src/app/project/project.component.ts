import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../services/project.service";
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormBuilder,
  FormArray
} from "@angular/forms";
 import { log } from 'util';
 @Component({
   selector: 'app-project',
   templateUrl: './project.component.html',
   styleUrls: ['./project.component.css']
 })

// @Component({
//   selector: 'app-create-project',
//   templateUrl: './create-project.component.html',
//   styleUrls: ['./create-project.component.css']
// })
export class ProjectComponent implements OnInit {

  form: any;
  tname :any[] = [];
  userName: any;
  passWord: any;
  userName1: any;
  passWord1: any;
  create = true;
  display = false;
  changeproject = false;
  productsLength: number = 0;
  startDate: any;
  endDate: any;
  Name: any;
  dummyArry: any[] = [];
  isPut =false;
  atttechments : any[] = [];
  attechmentArray : any[] = [];project_Name: string;

  
  constructor(
    private _FormBuilder: FormBuilder) {
   }
  ngOnInit() {
  this.form = this._FormBuilder.group({
    p_client_id: new FormControl("", Validators.required),
    project_Name: new FormControl("", Validators.required),
    type: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    ClientName : new FormControl("", Validators.required),
    status : new FormControl("", Validators.required),
    Priority: new FormControl("", Validators.required),
    LDescription: new FormControl("", Validators.required),
    startDate: new FormControl("", Validators.required),
    endDate: new FormControl("", Validators.required),
    cretedby: new FormControl("", Validators.required),
    EstimetedHr :  new FormControl("", Validators.required),
    documentAttechments:new FormControl("", Validators.required),
    
    products: this._FormBuilder.array([this.createProduct()])
  });




  
    this.tname=[
      {
        "StartDate" : "12-01-2019",
        "EndDate"   : "14-01-2019",
        "countDays" : "2",
        "leaveType" : "sick Leave"
      },
      {
        "StartDate" : "12-01-2019",
        "EndDate"   : "14-01-2019",
        "countDays" : "2",
        "leaveType" : "sick Leave"
      },
      {
        "StartDate" : "12-01-2019",
        "EndDate"   : "14-01-2019",
        "countDays" : "2",
        "leaveType" : "sick Leave"
      },
      {
        "StartDate" : "12-01-2019",
        "EndDate"   : "14-01-2019",
        "countDays" : "2",
        "leaveType" : "sick Leave"
      },
      {
        "StartDate" : "12-01-2019",
        "EndDate"   : "14-01-2019",
        "countDays" : "2",
        "leaveType" : "sick Leave"
      },
      {
        "StartDate" : "12-01-2019",
        "EndDate"   : "14-01-2019",
        "countDays" : "2",
        "leaveType" : "sick Leave"
      },
    ];
  }
  submit(value :any){
   let body = {
     p_client_id:this.form.p_client_id,
     p_Name : this.form.project_Name,                         
     p_Type : this.form.type,
     p_Category : this.form.category,
     p_client_Name : this.form.ClientName,
     p_status : this.form.status,
     p_Priority : this.form.Priority,
     p_long_descr : this.form.LDescription,
     p_start_date : this.form.startDate,
     p_End_date : this.form.endDate,
     p_est_Hr : this.form.EstimetedHr,
     p_Docs : this.form.documentAttechments,
    //  attechOp : "01-07-2019",
   }
   console.log("hello");
  

// this._ProjectService.createProject(body).subscribe(data=>{
//       console.log(data);
// },
// error => {
//   console.log(error);
// })
this.startDate=value.startDate;
this.endDate=value.endDate;
this.Name=value.Name;
this.validation(value);

  }
  changScreen(value){
    console.log("running"+value);
    
   if(value ==1){
    this.create = true;
    this.display =false;
    this.changeproject =false;
   }
   else if(value ==2)
   {
    this.create = false;
    this.display = true;
    this.changeproject=false;
   }
   else
   {
    this.create = false;
    this.display = false;
    this.changeproject=true; 
   }
  }

  addProduct() {
    const product = this.createProduct();
    this.products.push(product);
    this.productsLength++;
  }
  
  deleteFieldValue(index) {
    this.products.removeAt(index);
    this.productsLength--;
  }
  
  get products() {
    return this.form.get("products") as FormArray;
  }
  
  createProduct(): FormGroup {
    
      return this._FormBuilder.group({
        documentAttechments: new FormControl("", Validators.required)
      })
  }
  addSprinkling(){
    console.log("running add method ");
    console.log(this.form.value.project_Name);
    console.log(this.form.value);
    this.validation(this.form.value);    
 }

validation(value){
 console.log(value)
 
  console.log("running validation");
//  console.log(value.startDate.substr(0,4));
//   console.log(value.startDate.substr(8,2));
//   console.log(value.startDate.substr(5,2));
//   console.log(value.endDate.substr(0,4));
//   console.log(value.endDate.substr(8,2));
//   console.log(value.endDate.substr(5,2));
//   console.log(value.Name);
  console.log(value.project_Name);
  
  // if (value.project_Name ==""){  
  //     alert("Name can't be blank");  
  //      return false;  
  //    }

 

//   //for project name
// var project_Name1 = /^[A-Za-z]+$/;
// if(value.project_Name.match(project_Name1) && value.project_Name!="" )
// {
// //alert('Your name have accepted : you can try another');

// }
// else
// {
// alert( "Name can't be blank and Please input alphabet characters only for project Name");
// document.getElementById("na1").style.border = "1px solid #FC0606";
// document.getElementById("na1").focus();
// return false;
// }


// var project_Name1 = /^[A-Za-z]+$/;
// if(value.project_Name.match(project_Name1) && value.project_Name!="" )
// {
// //alert('Your name have accepted : you can try another');

// }
// else
// {
// alert( "Name can't be blank and Please input alphabet characters only for project Name");
// document.getElementById("na1").style.border = "1px solid #FC0606";
// document.getElementById("na1").focus();
// return false;
// }

  console.log(" value of project_Name"+this.form.project_Name);
if (this.form.project_Name == null) {
  console.log("if running")
  document.getElementById("na1").innerHTML =
    "* please Enter project Name";
  document.getElementById("p_NameFont").style.border = "1px solid #FC0606";
  return false;
} 
else {
  console.log("else running")
  if (!isNaN(this.form.project_Name)) {
    document.getElementById("na2").innerHTML =
      "*Accept charector only";
    document.getElementById("p_NameFont").style.border = "1px solid #FC0606";
    return false;
  }
}



if (this.form.ClientName == null) {
  console.log("if running")
  document.getElementById("cn1").innerHTML =
    "* please Enter client Name";
  document.getElementById("ClientName").style.border = "1px solid #FC0606";
  return false;
} 
else {
  console.log("else running")
  if (!isNaN(this.form.ClientName)) {
    document.getElementById("cn2").innerHTML =
      "*Accept charector only";
    document.getElementById("ClientName").style.border = "1px solid #FC0606";
    return false;
  }
}









// var ClientName1 = /^[A-Za-z]+$/;
// if(value.ClientName.match(ClientName1)  && value.ClientName!="")
// {
//   //alert('Your name have accepted : you can try another');

// }
//   else
// {
// alert( " client name cannot be blank and Please input alphabet characters only for client Name");
// document.getElementById("cn1").style.border = "1px solid #FC0606";
// document.getElementById("cn1").focus();
// return false;
// }


    if(value.startDate.substr(0,4)<=value.endDate.substr(0,4)&& 
    value.startDate.substr(8,2)<=value.endDate.substr(8,2) &&
    value.startDate.substr(5,2)<=value.startDate.substr(5,2)
    && value.startDate!="")
    {
      document.getElementById("sd1").innerHTML = "Start date is correct";
      document.getElementById("sd2").innerHTML = "";
      document.getElementById("sd").style.border = "1px solid green";
    }
    else
    {
      document.getElementById("sd2").innerHTML = "Edate should be greater then Sdate";
      document.getElementById("sd1").innerHTML = "";
      document.getElementById("sd").style.border = "1px solid #FC0606";
      document.getElementById("ed").focus();
      return false;
    }
 

 


//  var id = /^[0-9]+$/;
//  if(value.id.match(id))
//  {
//  //alert('Your name have accepted : you can try another');

//  }
//  else
//  {
//  alert('Please input  only number for project id');
//  document.getElementById("pid").style.border = "1px solid #FC0606";
//  document.getElementById("pid").focus();
//  }




 }
 modo(value){
  this.attechmentArray.push({documentAttechments :value.target.value})
  var obj = {"value" :value.target.files[0].name}
 this.atttechments.push(obj)
 console.log(this.attechmentArray);
 console.log( value.target.files[0].name);
 console.log( value.target.files[0].type);
 console.log( value.target.files[0].size); 
}
remove(index){
  console.log(index);
  this.attechmentArray.splice(index, 1);
  this.atttechments.splice(index, 1);
}



Profile()
  {
    var modal = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
  }
 

}
}

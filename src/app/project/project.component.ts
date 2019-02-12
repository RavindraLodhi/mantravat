import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  tname :any[] = [];
  userName: any;
  passWord: any;
  userName1: any;
  passWord1: any;
  create = true;
  display = false;
  constructor(private _ProjectService : ProjectService) {
   }
  ngOnInit() {

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
     clientName : "ravi",
     startDate : "01-02-2019",
     endDate : "01-07-2019",
     sortDes : "HRMS Case Study",
     longDes : "Document.doc",
     effort : "3 month",
     attechOp : "01-07-2019",
   }


this._ProjectService.createProject(body).subscribe(data=>{
      console.log(data);
},
error => {
  console.log(error);
})

  }
  changScreen(value){
    console.log("running"+value);
    
   if(value ==1){
    this.create = true;
    this.display = false;
   }
   else{
    this.create = false;
    this.display = true;
   }
  }
 }
 
 
     
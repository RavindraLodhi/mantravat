import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from '../services/leave.service';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  //declearation globle variable
  leavsHistry :any[] = [];
  headerOpts :any =[];
  applyLeave ;
  leaveHistry;
  leaveStatus;
  companyLeaveCelender :any =[];
  //creat object of import class
 constructor(private formBuilder :FormBuilder, private _LeaveService : LeaveService) {}
 
  ngOnInit() {

    this.applyLeave = true;
    this.leaveHistry =false;
    this.leaveStatus = false;
    //assign the value insise the headerOpts array for sidebar option
    this.headerOpts=["Start Date","End Date","countDays","leaveType"];
    //assign the value insise the leavsHistry array for the leave histry table
    this.leavsHistry=[
      {
        "StartDate" : "2-10-2019",
        "EndDate"   : "6-10-2019",
        "countDays" : 4,
        "leaveType" : "sick leave"
      },
      {
        "StartDate" : "2-10-2019",
        "EndDate"   : "6-10-2019",
        "countDays" : 4,
        "leaveType" : "sick leave"
      },
      {
        "StartDate" : "2-10-2019",
        "EndDate"   : "6-10-2019",
        "countDays" : 4,
        "leaveType" : "sick leave"
      },
      {
        "StartDate" : "2-10-2019",
        "EndDate"   : "6-10-2019",
        "countDays" : 4,
        "leaveType" : "sick leave"
      },
      {
        "StartDate" : "2-10-2019",
        "EndDate" : "6-10-2019",
        "countDays" : 4,
        "leaveType" : "sick leave"
      },
      {
        "StartDate" : "2-10-2019",
        "EndDate" : "6-10-2019",
        "countDays" : 4,
        "leaveType" : "sick leave"
      },
      {
        "StartDate" : "2-10-2019",
        "EndDate" : "6-10-2019",
        "countDays" : 4,
        "leaveType" : "sick leave"
      },
      {
        "StartDate" : "2-10-2019",
        "EndDate" : "6-10-2019",
        "countDays" : 4,
        "leaveType" : "sick leave"
      },
      {
        "StartDate" : "2-10-2019",
        "EndDate" : "6-10-2019",
        "countDays" : 4,
        "leaveType" : "sick leave"
      },
      {
        "StartDate" : "2-10-2019",
        "EndDate" : "6-10-2019",
        "countDays" : 4,
        "leaveType" : "sick leave"
      }
    ];

    this.companyLeaveCelender=[
      {
        "key" : "14 Jan Monday",
        "value"   : "Makar Sanktanti",
      },
      {
        "key" : "15 Jan Tuesday",
        "value"   : "Pongal",
      },
      {
        "key" : "26 Jan Suterday",
        "value"   : "Republic Day",
      },
      {
        "key" : "4 March Monday",
        "value"   : "Maha Shivratri",
      },
      {
        "key" : "20 March Wednesday",
        "value"   : "Holika Dahana",
      },
      {
        "key" : "21 March Thursday",
        "value"   : "Holi",
      },
      {
        "key" : "19 Apr Friday",
        "value"   : "Good Friday",
      },
      {
        "key" : "1 may Wednesday",
        "value"   : "May Day",
      },
      {
        "key" : "12 Aug Monday",
        "value"   : "Mark id",
      },
      {
        "key" : "15 Aug Thursday",
        "value"   : "Raksha Bandhan",
      },
      {
        "key" : "15 Aug Thursday",
        "value"   : "Independence Day",
      },
      {
        "key" : "11 sep Wednesday",
        "value"   : "Onam",
      },
      {
        "key" : "2 oct Wednesday",
        "value"   : "Mahatma Gandhi Jayanti",
      },
      {
        "key" : "8 Oct Tuesday",
        "value"   : "Dussehra",
      },
      {
        "key" : "27-29 0ct ",
        "value"   : "Diwali Break",
      },
      {
        "key" : "25 Des Wednesday",
        "value"   : "Chrimas",
      },
      {
        "key" : "31 Dec Tuesday",
        "value"   : "New Year's Eve",
      },
    ]

  }
   //assign the value insise the leavsHistry array for the company leave calender
  

//event fire mathode calls when click on submit button
  // submit(item){

  //   //leavService's mathod
  //   this._LeaveService.leavePost(item).subscribe(data=>{
  //     console.log(data+" :-responce return")
  //   },
  //   error =>{
  //     console.log(error);
  //   }
  // )
  // }
callComponentMethodHere(value){
  if (value==1) {
    this.applyLeave = true;
    this.leaveHistry =false;
    this.leaveStatus = false;
  } else if (value==2) {
    this.applyLeave = false;
    this.leaveHistry =true;
    this.leaveStatus = false;
  } else {
    this.applyLeave = false;
    this.leaveHistry =false;
    this.leaveStatus = true;
  }
 
}
}

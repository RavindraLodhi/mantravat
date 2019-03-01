import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LeaveService } from "../services/leave.service";
@Component({
  selector: "app-leave",
  templateUrl: "./leave.component.html",
  styleUrls: ["./leave.component.css"]
})
export class LeaveComponent implements OnInit {
  //   //declearation globle variable
  //   leavsHistry :any[] = [];
     headerOpts :any =[];
  applyLeave;
  leaveHistry;
  leaveStatus;
  companyLeaveCelender: any = [];
  leaveStatus1 :any[] = [];
  tname: any[]=[];

  
  //   //creat object of import class
  //  constructor(private formBuilder :FormBuilder, private _LeaveService : LeaveService) {}

  //   ngOnInit() {

  //  this._LeaveService.allLeaveHistry().subscribe(data=>{
  //       this.leaveHistry = data;
  //     },
  //     error =>{
  //     }
  //   )

  //     this.applyLeave = true;
  //     this.leaveHistry =false;
  //     this.leaveStatus = false;
  //     //assign the value insise the headerOpts array for sidebar option
  //     this.headerOpts=["Start Date","End Date","countDays","leaveType"];
  //     //assign the value insise the leavsHistry array for the leave histry table
  //     this.leaveStatus1=[
  //       {
  //         "Name" :      "Ravi",
  //         "StartDate" : "2-10-2019",
  //         "EndDate"   : "6-10-2019",
  //         "countDays" : 4,
  //         "leaveType" : "sick leave"
  //       },
  //       {
  //         "Name" :      "Anshul",
  //         "StartDate" : "2-10-2019",
  //         "EndDate"   : "6-10-2019",
  //         "countDays" : 5,
  //         "leaveType" : "sick leave"
  //       },
  //       {
  //         "Name" :      "smita",
  //         "StartDate" : "2-10-2019",
  //         "EndDate"   : "6-10-2019",
  //         "countDays" : 4,
  //         "leaveType" : "Study leave"
  //       },
  //       {
  //         "Name" :      "Garima",
  //         "StartDate" : "4-02-2019",
  //         "EndDate"   : "5-02-2019",
  //         "countDays" : 1,
  //         "leaveType" : "Study leave"
  //       },
  //       {
  //         "Name" :      "Aditya",
  //         "StartDate" : "2-02-2019",
  //         "EndDate"   : "7-02-2019",
  //         "countDays" : 5,
  //         "leaveType" : "Transfer leave"
  //       },
  //       {
  //         "Name" :      "sonal",
  //         "StartDate" : "10-02-2019",
  //         "EndDate"   : "12-02-2019",
  //         "countDays" : 4,
  //         "leaveType" : "Study leave"
  //       },
  //     ];
  //      this.companyLeaveCelender=[
  //        {
  //          "key" : "14 Jan Monday",
  //          "value"   : "Makar Sanktanti",
  //        },
  //        {
  //          "key" : "15 Jan Tuesday",
  //          "value"   : "Pongal",
  //        },
  //        {
  //          "key" : "26 Jan Suterday",
  //          "value"   : "Republic Day",
  //        },
  //        {
  //          "key" : "4 March Monday",
  //          "value"   : "Maha Shivratri",
  //        },
  //        {
  //          "key" : "20 March Wednesday",
  //          "value"   : "Holika Dahana",
  //        },
  //        {
  //          "key" : "21 March Thursday",
  //          "value"   : "Holi",
  //        },
  //        {
  //          "key" : "19 Apr Friday",
  //          "value"   : "Good Friday",
  //        },
  //        {
  //          "key" : "1 may Wednesday",
  //          "value"   : "May Day",
  //        },
  //        {
  //          "key" : "12 Aug Monday",
  //          "value"   : "Mark id",
  //        },
  //        {
  //          "key" : "15 Aug Thursday",
  //          "value"   : "Raksha Bandhan",
  //        },
  //        {
  //          "key" : "15 Aug Thursday",
  //          "value"   : "Independence Day",
  //        },
  //        {
  //          "key" : "11 sep Wednesday",
  //          "value"   : "Onam",
  //        },
  //        {
  //          "key" : "2 oct Wednesday",
  //        "value"   : "Mahatma Gandhi Jayanti",
  //        },
  //        {
  //          "key" : "8 Oct Tuesday",
  //          "value"   : "Dussehra",
  //        },
  //        {
  //          "key" : "27-29 0ct ",
  //          "value"   : "Diwali Break",
  //        },
  //        {
  //          "key" : "25 Des Wednesday",
  //          "value"   : "Chrimas",
  //        },
  //        {
  //          "key" : "31 Dec Tuesday",
  //          "value"   : "New Year's Eve",
  //        },
  //      ]
  //  }
  //    //assign the value insise the leavsHistry array for the company leave calender

  // //event fire mathode calls when click on submit button
  //    submit(item){

  //      var body = {
  //         leaveType :item.leaveType2,

  //         startDate : item.startDate,

  //         endDate : item.endDate,

  //         countDays : item.countDay,

  //         comment : item.comment
  //      }
  //      this._LeaveService.leavePost(body).subscribe(data=>{
  //        console.log(data+" :-responce return")
  //      },
  //      error =>{
  //        console.log(error);
  //      }
  //    )
  //    }
  // callComponentMethodHere(value){
  //   if (value==1) {
  //     this.applyLeave = true;
  //     this.leaveHistry =false;
  //     this.leaveStatus = false;
  //   } else if (value==2) {
  //     this.applyLeave = false;
  //     this.leaveHistry =true;
  //     this.leaveStatus = false;

  //   } else {
  //     this.applyLeave = false;
  //     this.leaveHistry =false;
  //     this.leaveStatus = true;
  //   }

  // }

  /****************** global bariable *********************/

  form: any;
  isDisplayTask: boolean = false;
  l_SDate: any;
  l_EDate: any;
  tname1: {}[];
  headerOpts1: string[];

  /****************** contructor for create object *********************/
  constructor(private _FormBuilder: FormBuilder) {}

  /****************** methode will run after constructor *********************/
  ngOnInit() {
    this.initialiseTaskForm();
    this.companyCalender();
    this.leaveHistryDummy();
    this.applyLeave = true;
    this.leaveHistry = false;
    this.leaveStatus = false;
  }
  get f() {
    return this.form.controls;
  }

  private initialiseTaskForm() {
    this.form = this._FormBuilder.group({
      l_type: [" ", [Validators.required]],
      l_Day: [" ", [Validators.required]],
      l_SDate: [" ", [Validators.required]],
      l_EDate: [" ", [Validators.required]],
      l_count_days: ["", [Validators.required]],
      l_LongDescription: [" ", [Validators.required]]
    });
  }
validate(value)
{
 this.l_SDate=value.l_SDate
 this.l_EDate=value.l_EDate
 console.log(new Date().getDate());
 console.log(value.l_SDate.substr(8,2));
 if(new Date().getFullYear()<=value.l_SDate.substr(0,4)  &&   value.l_SDate!="")
 {
   if(new Date().getMonth()+1<value.l_SDate.substr(6,1))
   {
    if(new Date().getDate()>=value.l_SDate.substr(8,2))
    {
      document.getElementById("sd1").innerHTML = "Start Date is correct";
      document.getElementById("sd").innerHTML = "";
      document.getElementById("l_SDate").style.border = "1px solid green";
    }
    else
    {
      document.getElementById("sd").innerHTML = "choose future date";
      document.getElementById("sd1").innerHTML = "";
      document.getElementById("l_SDate").style.border = "1px solid #FC0606";
      document.getElementById("l_SDate").focus();
      return false;
    }


   }
   else 
   {
    if(new Date().getDate()<=value.l_SDate.substr(8,2))
    {
      document.getElementById("sd1").innerHTML = "Start Date is correct";
      document.getElementById("sd").innerHTML = "";
      document.getElementById("l_SDate").style.border = "1px solid green";
    }
    else
    {
      document.getElementById("sd").innerHTML = "choose future date";
      document.getElementById("sd1").innerHTML = "";
      document.getElementById("l_SDate").style.border = "1px solid #FC0606";
      document.getElementById("l_SDate").focus();
      return false;
    }
   }
   
   
 }
 else{
  document.getElementById("sd").innerHTML = "choose future date";
  document.getElementById("sd1").innerHTML = "";
  document.getElementById("l_SDate").style.border = "1px solid #FC0606";
  document.getElementById("l_SDate").focus();
  return false;
 }
 if(value.l_EDate.substr(0,4)>=value.l_SDate.substr(0,4) && value.l_EDate.substr(8,2)>=value.l_SDate.substr(8,2) &&  value.l_SDate.substr(5,2)>=value.l_SDate.substr(5,2)&& value.l_EDate!="")
 {
   document.getElementById("ed1").innerHTML = "End Date is correct";
   document.getElementById("ed").innerHTML = "";
   document.getElementById("l_EDate").style.border = "1px solid green";
   
 }
 else{
   document.getElementById("ed").innerHTML = "enter end date>=start date";
   document.getElementById("ed1").innerHTML = "";
   document.getElementById("l_EDate").style.border = "1px solid #FC0606";
   document.getElementById("l_EDate").focus();
   return false;
 }
 
 
}
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "col-sm-2 sidebarleft divHight2") {
      console.log("if");
      x.className = "sidebarleftB";
    } else {
      console.log("else");
      x.className = "col-sm-2 sidebarleft divHight2";
    }
  }
  myFunctionFeedBack() {
    var x = document.getElementById("Feed");
    if (x.className === "col-sm-3 right-sidebar") {
      console.log("if");
      x.className = "right-sidebarB";
    } else {
      console.log("else");
      x.className = "col-sm-3 right-sidebar";
    }
  }
  DisplayTask() {
    this.isDisplayTask = true;
  }
  DisplaycreateChangTask() {
    this.isDisplayTask = false;
  }

  addLeave() {
    console.log(this.form.value);
    this.validate(this.form.value);
    
  }

  companyCalender() {
    this.headerOpts1=["Aditya","Ravi","joy","Anshul"];
    this.tname=[
      
      {
        "StartDate" : "2-10-2019",
        "EndDate"   : "6-10-2019",
        "Reason":"went to native",
        "total":"10"
      },
      // {
      //   "StartDate" : "2-10-2019",
      //   "EndDate"   : "6-10-2019",
      //   "Reason":"went to native",
      //   "total":"10"
      // },{
      //   "StartDate" : "2-10-2019",
      //   "EndDate"   : "6-10-2019",
      //   "Reason":"went to native",
      //   "total":"10"
      // },{
      //   "StartDate" : "2-10-2019",
      //   "EndDate"   : "6-10-2019",
      //   "Reason":"went to native",
      //   "total":"10"
      // },{
      //   "StartDate" : "2-10-2019",
      //   "EndDate"   : "6-10-2019",
      //   "Reason":"went to native",
      //   "total":"10"
      // },{
      //   "StartDate" : "2-10-2019",
      //   "EndDate"   : "6-10-2019",
      //   "Reason":"went to native",
      //   "total":"10"
      // }
    ]
    this.companyLeaveCelender = [
      {
        key: "14 Jan Monday",
        value: "Makar Sanktanti"
      },
      {
        key: "15 Jan Tuesday",
        value: "Pongal"
      },
      {
        key: "26 Jan Suterday",
        value: "Republic Day"
      },
      {
        key: "4 March Monday",
        value: "Maha Shivratri"
      },
      {
        key: "20 March Wednesday",
        value: "Holika Dahana"
      },
      {
        key: "21 March Thursday",
        value: "Holi"
      },
      {
        key: "19 Apr Friday",
        value: "Good Friday"
      },
      {
        key: "1 may Wednesday",
        value: "May Day"
      },
      {
        key: "12 Aug Monday",
        value: "Mark id"
      },
      {
        key: "15 Aug Thursday",
        value: "Raksha Bandhan"
      },
      {
        key: "15 Aug Thursday",
        value: "Independence Day"
      },
      {
        key: "11 sep Wednesday",
        value: "Onam"
      },
      {
        key: "2 oct Wednesday",
        value: "Mahatma Gandhi Jayanti"
      },
      {
        key: "8 Oct Tuesday",
        value: "Dussehra"
      },
      {
        key: "27-29 0ct ",
        value: "Diwali Break"
      },
      {
        key: "25 Des Wednesday",
        value: "Chrimas"
      },
      {
        key: "31 Dec Tuesday",
        value: "New Year's Eve"
      }
    ];
  }

  callComponentMethodHere(value) {
    if (value == 1) {
      this.applyLeave = true;
      this.leaveHistry = false;
      this.leaveStatus = false;
    } else if (value == 2) {
      this.applyLeave = false;
      this.leaveHistry = true;
      this.leaveStatus = false;
    } else {
      this.applyLeave = false;
      this.leaveHistry = false;
      this.leaveStatus = true;
    }
  }

  leaveHistryDummy() {
    this.headerOpts=["Requested Date","LeaveType","Days","RequestStatus","Start Date","End Date","leavereasons"];
      this.leaveStatus1=[
         {
          "Rdate" :      "2-10-2019",
          "leaveType" : "sick leave",
          "Days" : 4,
          "Rstatus":" Approved",
          "StartDate" : "2-10-2019",
          "EndDate"   : "6-10-2019",
          "lreasons":"Fever"
        },
        {
          "Rdate" :      "2-10-2019",
          "leaveType" : "sick leave",
          "Days" : 4,
          "Rstatus":" Approved",
          "StartDate" : "2-10-2019",
          "EndDate"   : "6-10-2019",
          "lreasons":"Fever"
        },
        {
          "Rdate" :      "2-10-2019",
          "leaveType" : "sick leave",
          "Days" : 4,
          "Rstatus":" Approved",
          "StartDate" : "2-10-2019",
          "EndDate"   : "6-10-2019",
          "lreasons":"Fever"
        },
        {
          "Rdate" :      "2-10-2019",
          "leaveType" : "sick leave",
          "Days" : 4,
          "Rstatus":" Approved",
          "StartDate" : "2-10-2019",
          "EndDate"   : "6-10-2019",
          "lreasons":"Fever"
        },
        {
          "Rdate" :      "2-10-2019",
          "leaveType" : "sick leave",
          "Days" : 4,
          "Rstatus":" Approved",
          "StartDate" : "2-10-2019",
          "EndDate"   : "6-10-2019",
          "lreasons":"Fever"
        },
        {
          "Rdate" :      "2-10-2019",
          "leaveType" : "sick leave",
          "Days" : 4,
          "Rstatus":" Approved",
          "StartDate" : "2-10-2019",
          "EndDate"   : "6-10-2019",
          "lreasons":"Fever"
        },
        {
          "Rdate" :      "2-10-2019",
          "leaveType" : "sick leave",
          "Days" : 4,
          "Rstatus":" Approved",
          "StartDate" : "2-10-2019",
          "EndDate"   : "6-10-2019",
          "lreasons":"Fever"
        },
        {
          "Rdate" :      "2-10-2019",
          "leaveType" : "sick leave",
          "Days" : 4,
          "Rstatus":" Approved",
          "StartDate" : "2-10-2019",
          "EndDate"   : "6-10-2019",
          "lreasons":"Fever"
        },
       ];
  }
}





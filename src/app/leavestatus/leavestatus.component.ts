import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {
  leaveStatus: boolean;
  headerOpts1: string[];
  tname: { "StartDate": string; "EndDate": string; "Reason": string; "total": string; }[];
  companyLeaveCelender: { key: string; value: string; }[];

  constructor() { }

  ngOnInit() {
    this.leaveStatus=true;
    this.companyCalender();
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


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayproject',
  templateUrl: './displayproject.component.html',
  styleUrls: ['./displayproject.component.css']
})
export class DisplayprojectComponent implements OnInit {
  tname :any[] = [];
  constructor() { }

  ngOnInit() {
    this.tname=[
      {
        "StartDate" : "1",
        "EndDate"   : "Aditya",
        "countDays" : "12-01-2019 ",
        "leaveType" : "05-02-2019"
      },
      {
        "StartDate" : "2",
        "EndDate"   : "Ravi",
        "countDays" : "15-01-2019 ",
        "leaveType" : "02-06-2019"
      },
      {
        "StartDate" : "3",
        "EndDate"   : "Raju",
        "countDays" : "11-02-2019 ",
        "leaveType" : "02-04-2019"
      },
      {
        "StartDate" : "4",
        "EndDate"   : "Vicky",
        "countDays" : "11-01-2019 ",
        "leaveType" : "02-02-2019"
      },
      {
        "StartDate" : "5",
        "EndDate"   : "Prakash",
        "countDays" : "12-01-2019 ",
        "leaveType" : " 05-02-2019"
      },
      {
        "StartDate" : "6",
        "EndDate"   : "Mohan",
        "countDays" : "15-01-2019  ",
        "leaveType" : "02-06-2019"
      },
    ];
  }

}

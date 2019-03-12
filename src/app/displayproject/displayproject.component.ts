import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayproject',
  templateUrl: './displayproject.component.html',
  styleUrls: ['./displayproject.component.css']
})
export class DisplayprojectComponent implements OnInit {
  tname :any[] = [];
  names: string[];
  constructor() { }

  ngOnInit() {
    var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
 this.names=['Jani','Hege','Kai'];
}
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

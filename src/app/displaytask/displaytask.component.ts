import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css']
})
export class DisplaytaskComponent implements OnInit {

  tname :any[] = [];

  
  //creat object of import class
 constructor(private  _TaskService :TaskService) {


 }

  ngOnInit() {
    this._TaskService.displaytask().subscribe(data =>{

    },
    error => {
        
    })
    this.tname=[
      {
        "StartDate" : "RAVI",
        "EndDate"   : "HIGH",
        "countDays" : "12-01-2019 TO 05-02-2019",
        "leaveType" : "Started"
      },
      {
        "StartDate" : "ADITYA",
        "EndDate"   : "LOW",
        "countDays" : "15-01-2019 TO 02-06-2019",
        "leaveType" : "Completed"
      },
      {
        "StartDate" : "AJ",
        "EndDate"   : "MIDDLE",
        "countDays" : "11-02-2019 TO 02-04-2019",
        "leaveType" : "PROCESS"
      },
      {
        "StartDate" : "IK",
        "EndDate"   : "LOW",
        "countDays" : "11-01-2019 TO 02-02-2019",
        "leaveType" : "Completed"
      },
      {
        "StartDate" : "RAVI 4",
        "EndDate"   : "HIGH 4",
        "countDays" : "12-01-2019 TO 05-02-2019",
        "leaveType" : "Started"
      },
      {
        "StartDate" : "ADITYA1",
        "EndDate"   : "LOW",
        "countDays" : "15-01-2019 TO 02-06-2019",
        "leaveType" : "Completed"
      },
    ];
  }

}

import { Component, OnInit } from "@angular/core";
import { TaskService } from "../services/task.service";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  // globle variable
  menu: any[] = [];
  title;  
  discription;
  timeLine;
  endTime;
  effort;
  priority;
  dummyArry: any[] = [];
  isPut =false;

  // constructor for creating object
  constructor(private _TaskService: TaskService) {}


//it will call after constructor
  ngOnInit() {

    //call task Service method for taking task Id
    this._TaskService.getShortDes().subscribe(
      data => {
      },
      error => {
      }
    );

    //static array we have to convert to dynemic Array
    this.dummyArry = [
      {
        id: 1,
        shortDec: "Login"
      },
      {
        id: 2,
        shortDec: "Dashbord"
      },
      {
        id: 3,
        shortDec: "Dashbord"
      },
      {
        id: 4,
        shortDec: "Admin"
      }
    ];

// dynemic Array for left menu bar
    this.menu = [
      "Create Task",
      "Chnage Task",
      "Display Task",
      "Time Sheet",
      "task"
    ];
  }

  //methode will run click on chang task button
  submit(item) {
    let body = {
      startDate: "01-02-2019",
      endDate: "01-07-2019",
      sortDes: "HRMS Case Study",
      longDes: "Document.doc",
      effort: "3 month",
      attechOp: "01-07-2019",
      status: "open",
      priority: "very high",
      projectSD: "HRMS Case Study",
      assignment: "ravi",
      attechment: "Document.doc"
    };

    //call task service method for put and post data
    this._TaskService.submitTask(body,this.isPut).subscribe(
      data => {},
      error => {
        console.log(error);
      }
    );
  }

  //call for chang task according to TaskId  to chng the task
  chengTask(index) { 
    this.isPut = true;
       this._TaskService.changTask(this.dummyArry[index].id).subscribe(data =>{
       },
       error => {
       }
     )

     //call local setData Method
    this.setData();
  }

//to set dat using two-way data binding
  setData() {
    var data = [
      { Priority: "saab" },
      { discription: "qsqd" },
      { effort: "qq" },
      { endTime: "2019-02-05" },
      { status: "saab" },
      { timeLine: "2019-02-21" },
      { title: "wqwr" }
    ];

    this.title = "ravi";
    this.discription = "working on login Screen";
    this.timeLine = "2019-02-21";
    this.endTime = "2019-02-21";
    this.effort = "2d";
    this.priority = "open";
  }

  ctreate() {
    this.isPut = false;
    this.title = " ";
    this.discription = " ";
    this.timeLine = " ";
    this.endTime = " ";
    this.effort = " ";
    this.priority = " ";
  }
}

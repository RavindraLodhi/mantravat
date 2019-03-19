import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  form: any;
  names :any[] = [];
  name: { "StartDate": string; "EndDate": string; "projectname": string; "status": string; }[];
  tasks: string[][];
  a: string;
  sub: { "StartDate": string; "EndDate": string; "projectname": string; "status": string; }[];
  subtask: {"name":string, "StartDate": string; "EndDate": string; "projectname": string; "status": string; }[];
  

  constructor() { }

  ngOnInit() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    this.a="task-1"
    this.names=["project1"
    ,'project2'
    ,'project3'
    ,'project4']
    
    this.tasks=[
      ['taskA','taskb','taskc'],
      ['taskA','taskb','taskc'],
      ['taskA','taskB','taskc']
    ]

  
    
    this.name=[
      {
        "StartDate" : "12-01-2019",
        "EndDate"   : "14-01-2019",
        "projectname" : "hrms",
        "status" : "progress"
      },

      // {
      //   "StartDate" : "15-01-2019",
      //   "EndDate"   : "20-01-2019",
      //   "projectname" : "cs",
      //   "status" : " in progress"
      // },
    ]

    this.sub=[
      {
        "StartDate" : "10-02-2019",
        "EndDate"   : "27-04-2019",
        "projectname" : "hrms",
        "status" : "progress"
      },

      // {
      //   "StartDate" : "05-01-2019",
      //   "EndDate"   : "20-01-2019",
      //   "projectname" : "cs",
      //   "status" : " in progress"
      // },
    ]

    this.subtask=[
      {
        "name" : "Subtask1",
        "StartDate" : "20-02-2019",
        "EndDate"   : "25-04-2019",
        "projectname" : "Fms",
        "status" : " in progress"
      },

      {
        "name":"Subtask2",
        "StartDate" : "05-01-2019",
        "EndDate"   : "20-01-2019",
        "projectname" : "ms",
        "status" : "complete"
      },
    ]
  }
  



  
  task(){
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }
  }
  
  


  
  



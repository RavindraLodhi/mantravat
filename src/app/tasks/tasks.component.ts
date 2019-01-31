import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  menu: any[]=[];

  constructor() { }

  ngOnInit() {
    	this.menu=["Create Task","Chnage Task","Display Task", "Time Sheet","task"];
  }

}

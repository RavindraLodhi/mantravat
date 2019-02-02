import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { NgForm } from "@angular/forms";
import { ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import * as d3 from "d3";
import { DataService } from "./data-service.service";
import { Task } from "./model/task";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit {
    staticsDataFromParent :any[] = [];
    ngOnInit() { }
}

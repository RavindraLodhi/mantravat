import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  userName: any;
  passWord: any;
  userName1: any;
  passWord1: any;
  constructor() {
   }
  ngOnInit() {
  }
  submit(value :any){
    console.log("welcome");
    this.userName=value.userName;
    this.passWord=value.passWord;
    this.userName1=value.userName1;
    this.passWord1=value.passWord2;
    console.log("this.userName"+this.userName);
    console.log("this.passWord"+this.passWord);
    console.log("this.userName"+this.userName1);
    console.log("this.passWord"+this.passWord1);
  }
 }
 
 

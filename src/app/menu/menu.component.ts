import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.pro()
  }
   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  pro() {
    console.log("hello");
    
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
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
  project() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l2.style.display="none";
   l1.style.display="block";
   l3.style.display="none";
   l4.style.display="none";
   l5.style.display="none";
   l6.style.display="none";
   l7.style.display="none";
   this.pro()
  }
  task() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l2.style.display="block";
   l3.style.display="none";
   l4.style.display="none";
   l5.style.display="none";
   l6.style.display="none";
   l7.style.display="none";
   this.pro()
  }
  team() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l2.style.display="none";
   l3.style.display="block";
   l4.style.display="none";
   l5.style.display="none";
   l6.style.display="none";
   l7.style.display="none";
   this.pro()
  }
  leave() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l3.style.display="none";
   l4.style.display="block";
   l2.style.display="none";
   l5.style.display="none";
   l6.style.display="none";
   l7.style.display="none";
   this.pro()
  }
  timesheet() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l5.style.display="block";
   l3.style.display="none";
   l4.style.display="none";
   l2.style.display="none";
   l6.style.display="none";
   l7.style.display="none";
   this.pro()
  }
  login() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l3.style.display="none";
   l4.style.display="none";
   l5.style.display="none";
   l2.style.display="none";
   l6.style.display="block";
   l7.style.display="none";
   this.pro()
  }
  profile() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l3.style.display="none";
   l4.style.display="none";
   l5.style.display="none";
   l6.style.display="none";
   l2.style.display="none";
   l7.style.display="block";
   this.pro()
  }
}

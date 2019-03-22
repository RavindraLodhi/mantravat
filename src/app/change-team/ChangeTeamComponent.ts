import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-change-team',
  templateUrl: './change-team.component.html',
  styleUrls: ['./change-team.component.css']
})
export class ChangeTeamComponent implements OnInit {
  resoures: any[] = [];
  team: any[] = [];
  feed: string[];
  value: any[] = [];
  teams: any;
  constructor() { }
  ngOnInit() {
    // this.feed = ["Every project has deadline", "Please fill Timesheet Regulary", "You can see the Timesheet By Display timshhet", "This is Feed Screen", "You cant Enter any thing"];
    this.resoures = [{
      'name': 'mantravat',
      'des': 'case study project',
      'sd': '2019-03-03',
      'ed': '2019-03-31'
    }]

    this.team = [{
      'name': 'Abc',
      'tdes': 'case study project',
      'sd': '2019-03-03',
      'ed': '2019-03-31'
    }]
  }
  resources() {
    var name = (document.getElementById("tname") as HTMLElement).value;
   
    
    for (var i=0;i< this.team.length;i++) {

     
      if (name == this.team[i].name) {
        (document.getElementById("tdes") as HTMLElement).value=this.team[i].tdes;
        (document.getElementById("tsd") as HTMLElement).value=this.team[i].sd;
        (document.getElementById("ted") as HTMLElement).value=this.team[i].ed;
      }
      else{
        (document.getElementById("tdes") as HTMLElement).value='';
        (document.getElementById("tsd") as HTMLElement).value='';
        (document.getElementById("ted") as HTMLElement).value='';
        alert('Team Not Found')
      }
    }

  }

  res() {
    var rn = (document.getElementById("rname") as HTMLElement).value;
    var rd = (document.getElementById("rdes") as HTMLElement).value;
    var sd = (document.getElementById("rsd") as HTMLElement).value;
    var ed = (document.getElementById("red") as HTMLElement).value;
    
    console.log(rn);
    this.resoures.push({
      'name': rn,
      'rd': rd,
      'sd': sd,
      'ed': ed
    });
    console.log(this.resoures);
  }
  Team() {
    var tn = (document.getElementById("tname") as HTMLElement).value;
    var td = (document.getElementById("tdes") as HTMLElement).value;
    var sd = (document.getElementById("tsd") as HTMLElement).value;
    var ed = (document.getElementById("ted") as HTMLElement).value;
    
    
    console.log(tn);
    this.teams.push({
     
      'name': tn,
      'rd': td,
      'sd': sd,
      'ed': ed
    });
    console.log(this.teams);
  }
}

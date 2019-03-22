import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  resoures: any[] = [];
  team:any[]=[];
  feed: string[];
  value:any[]=[];
  

  constructor() { }

  ngOnInit() {
  
    this.feed=["Every project has deadline","Please fill Timesheet Regulary","You can see the Timesheet By Display timshhet","This is Feed Screen","You cant Enter any thing"]
  }
  res()
  {
    var rn=(document.getElementById("rname")as HTMLElement).value;
    var rd=(document.getElementById("rdes")as HTMLElement).value;
    var sd=(document.getElementById("rsd")as HTMLElement).value;
    var ed=(document.getElementById("red")as HTMLElement).value;
    console.log(rn);
    
    this.resoures.push(
      {
        'name':rn,
        'rd':rd,
        'sd':sd,
        'ed':ed
    }
    )
   console.log(this.resoures); 
  }
  Team()
  {
    var rn=(document.getElementById("tname")as HTMLElement).value;
    var rd=(document.getElementById("tdes")as HTMLElement).value;
    var sd=(document.getElementById("tsd")as HTMLElement).value;
    var ed=(document.getElementById("ted")as HTMLElement).value;
    console.log(rn);
    
    this.team.push(
      {
        'name':rn,
        'rd':rd,
        'sd':sd,
        'ed':ed
    }
    )
   console.log(this.team); 
  }

}




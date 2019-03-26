import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayteam',
  templateUrl: './displayteam.component.html',
  styleUrls: ['./displayteam.component.css']
})
export class DisplayteamComponent implements OnInit {
  resoures: any;
  team: any;

  constructor() { }

  ngOnInit() {
    this.resoures=[
    {
      'name':'Aditya',
      'rd':"angular",
      'sd':"02-092018",
      'ed':"04-02-2019",
      'res':['Abcd','123','5']
  }]
  console.log(this.resoures[0].res[0]);
  
  
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
        'name':'Aditya',
        'rd':"angular",
        'sd':"02-092018",
        'ed':"04-02-2019"
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

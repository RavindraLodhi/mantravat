import { Component, OnInit } from '@angular/core';
import { d } from '@angular/core/src/render3';

@Component({
  selector: 'app-createtimesheet',
  templateUrl: './createtimesheet.component.html',
  styleUrls: ['./createtimesheet.component.css']
})
export class CreatetimesheetComponent implements OnInit {

  days: any[] = [];
  weeks: any[] = [];
  today1: string;
  names: string[];
  feed: string[];
;
  today: Date;
  constructor() { }
    
  ngOnInit() {
    var today = new Date();
    document.getElementById("m").innerHTML=String(today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2));
    this.today1=today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2);
    this.names=["Please select a Project","HRMS","TMS","Farm Manager","SAP ABAP","PHP","HMS","CMS"]
    this.feed=["Every project has deadline","Please fill Timesheet Regulary","You can see the Timesheet By Display timshhet","This is Feed Screen","You cant Enter any thing"]
   
    // this.days =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    // this.weeks = [
    //   {
    //     "value": "friday"
    //   },
    //   {
    //     "value": "saturday"
    //   },
    //   {
    //     "value": "sunday"
    //   },
    //   {
    //     "value": "monday"
    //   },
    //   {
    //     "value": "tuesday"
    //   },
    //   {
    //     "value": "wednusday"
    //   },
    //   {
    //     "value": "thursday"
    //   },
    // ];
  }
  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  

  date(firstNameInput) {
    var today=new Date();
    console.log(today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2));
    document.getElementById("m").innerHTML=today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2);
    
    console.log(firstNameInput.value);
    console.log("running date" + firstNameInput.value.substr(5, 2));
     this.weeks=["sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"];
    console.log(this.weeks[5])
    console.log(firstNameInput.value.substr(0, 4));
    
    this.weeks=[
      "sunday","monday","tuesday","wednusday","thursday","friday","saturday",
      "sunday","monday","tuesday","wednusday","thursday","friday","saturday",
      "sunday","monday","tuesday","wednusday","thursday","friday","saturday",
      "sunday","monday","tuesday","wednusday","thursday","friday","saturday"
      ,"sunday","monday","tuesday","wednusday","thursday","friday","saturday"
      ,"sunday","monday","tuesday","wednusday","thursday","friday","saturday"];
      console.log(this.weeks);
      
     
     console.log(firstNameInput.value.substr(0, 4));
     
     // if(firstNameInput.value.substr(0, 4)!="2019")
     // {
     //   alert("error year shloud be 2019 only");
     //   return false;
     // }
 
     if (firstNameInput.value.substr(5, 2) == "02") {
       
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=28+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
      
 
     }
     if (firstNameInput.value.substr(5, 2) == "01" ) {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=31+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
 
      
     }
     if (firstNameInput.value.substr(5, 2) == "04" ) {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=30+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
 
     }
     if(firstNameInput.value.substr(5, 2) == "03")
     {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=31+new Date(firstNameInput.value).getDay();i++)
       {
         console.log(i)
         this.weeks[j]=this.weeks[i];
         j++
       }
 
     }
     if(firstNameInput.value.substr(5, 2) == "05")
     {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=31+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
 
     }
     if(firstNameInput.value.substr(5, 2) == "07")
     {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=31+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
 
     }
     if(firstNameInput.value.substr(5, 2) == "08")
     {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=31+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
 
     }
     if(firstNameInput.value.substr(5, 2) == "10")
     {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=31+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
 
     }
     if(firstNameInput.value.substr(5, 2) == "12")
     {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=31+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
 
     }
     if(firstNameInput.value.substr(5, 2) == "06")
     {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=30+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
 
     }
     if(firstNameInput.value.substr(5, 2) == "09")
     {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=30+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
 
     }
     if(firstNameInput.value.substr(5, 2) == "11")
     {
       this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
       var j=0;
       for(var i=new Date(firstNameInput.value).getDay();i<=30+new Date(firstNameInput.value).getDay();i++)
       {
         
         this.weeks[j]=this.weeks[i];
         j++
       }
 
     }
    
      
     // console.log(this.days);
     // console.log(this.weeks);
     

  }
  create(p,t,des)
  {
console.log("running submit");
console.log(p.value,t.value,des.value);


  }
 
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createtimesheet',
  templateUrl: './createtimesheet.component.html',
  styleUrls: ['./createtimesheet.component.css']
})
export class CreatetimesheetComponent implements OnInit {

  days: any[] = [];
  weeks: any[] = [];;
  constructor() { }

  ngOnInit() {
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
    
    console.log(new Date(firstNameInput.value).getDay());
    console.log("running date" + firstNameInput.value.substr(5, 2));
     this.weeks=["sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"];
    console.log(this.weeks[5])
    console.log(firstNameInput.value.substr(0, 4));
    
    if(firstNameInput.value.substr(0, 4)!="2019")
    {
      alert("error year shloud be 2019 only");
      return false;
    }

    if (firstNameInput.value.substr(5, 2) == "02") {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
      this.weeks=[ "friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday" ,"sunday","monday","tuesday","wednusday","thursday"]
    }
    if (firstNameInput.value.substr(5, 2) == "01" ) {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      this.weeks=["tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"];
    }
    if (firstNameInput.value.substr(5, 2) == "04" ) {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
      this.weeks=["monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"]
    }
    if(firstNameInput.value.substr(5, 2) == "03")
    {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      this.weeks=["friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday"];
    }
    if(firstNameInput.value.substr(5, 2) == "05")
    {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      this.weeks=[,"Wednusday","Thrusday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"];
    }
    if(firstNameInput.value.substr(5, 2) == "07")
    {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      this.weeks=["monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"];
    }
    if(firstNameInput.value.substr(5, 2) == "08")
    {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      this.weeks=["thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"];
    }
    if(firstNameInput.value.substr(5, 2) == "10")
    {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      this.weeks=["tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"];
    }
    if(firstNameInput.value.substr(5, 2) == "12")
    {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      this.weeks=["sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"]
    }
    if(firstNameInput.value.substr(5, 2) == "06")
    {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
      this.weeks=["sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"]
    }
    if(firstNameInput.value.substr(5, 2) == "09")
    {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
      this.weeks=["Saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"]
    }
    if(firstNameInput.value.substr(5, 2) == "11")
    {
      this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
      this.weeks=["friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday","sunday","monday","tuesday","wednusday","thursday","friday","saturday"]
    }
    // for(var i=5;i<this.weeks.length;i++)
    // {
    //   if(this.weeks[i]=="sunday"||this.weeks[i]=="monday" )
    //   {
    //       console.log(this.weeks[i]);
          
    //       document.getElementById("'day_'+i").style.color="red";
         
    //   }
    // }
    

    console.log(this.days);


  }
  create(p,t,des)
  {
console.log("running submit");
console.log(p.value,t.value,des.value);


  }
}

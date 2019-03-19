import { Component, OnInit } from '@angular/core';
// import { link } from 'fs';

@Component({
  selector: 'app-displayproject',
  templateUrl: './displayproject.component.html',
  styleUrls: ['./displayproject.component.css']
})
export class DisplayprojectComponent implements OnInit {
  tname :any[] = [];
  names: string[];
  constructor() { }

  ngOnInit() {
    
    var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
 this.names=['Jani','Hege','Kai'];
}
    this.tname=[
      {
        "StartDate" : "1",
        "EndDate"   : "Aditya",
        "countDays" : "12-01-2019 ",
        "leaveType" : "05-02-2019"
      },
      {
        "StartDate" : "2",
        "EndDate"   : "Ravi",
        "countDays" : "15-01-2019 ",
        "leaveType" : "02-06-2019"
      },
      {
        "StartDate" : "3",
        "EndDate"   : "Raju",
        "countDays" : "11-02-2019 ",
        "leaveType" : "02-04-2019"
      },
      {
        "StartDate" : "4",
        "EndDate"   : "Vicky",
        "countDays" : "11-01-2019 ",
        "leaveType" : "02-02-2019"
      },
      {
        "StartDate" : "5",
        "EndDate"   : "Prakash",
        "countDays" : "12-01-2019 ",
        "leaveType" : " 05-02-2019"
      },
      {
        "StartDate" : "6",
        "EndDate"   : "Mohan",
        "countDays" : "15-01-2019  ",
        "leaveType" : "02-06-2019"
      },
    ];

    
  }
  state()
  {
    var l1=(document.getElementById('l1') as HTMLInputElement);
    var l2=(document.getElementById('l2') as HTMLInputElement);
    var l3=(document.getElementById('l3') as HTMLInputElement);
    var l4=(document.getElementById('l4') as HTMLInputElement);
    var l5=(document.getElementById('l5') as HTMLInputElement);
    var l6=(document.getElementById('l6') as HTMLInputElement);
    l6.style.color="#26a69a"
    l6.style.marginBottom='25px'
    l2.style.color='black';
    l2.style.marginBottom='0px'
    l1.style.color='black';
    l1.style.marginBottom='0px'
    l3.style.color='black';
    l3.style.marginBottom='0px'
    l5.style.color='black';
    l5.style.marginBottom='0px'
    l4.style.color='black';
    l4.style.marginBottom='0px'
    
    
  }
  land()
  {
    var l1=(document.getElementById('l1') as HTMLInputElement);
    var l2=(document.getElementById('l2') as HTMLInputElement);
    var l3=(document.getElementById('l3') as HTMLInputElement);
    var l4=(document.getElementById('l4') as HTMLInputElement);
    var l5=(document.getElementById('l5') as HTMLInputElement);
    var l6=(document.getElementById('l6') as HTMLInputElement);
    l5.style.color="#26a69a"
    l5.style.marginBottom='25px'
    l2.style.color='black';
    l2.style.marginBottom='0px'
    l1.style.color='black';
    l1.style.marginBottom='0px'
    l3.style.color='black';
    l3.style.marginBottom='0px'
    l4.style.color='black';
    l4.style.marginBottom='0px'
    l6.style.color='black';
    l6.style.marginBottom='0px'
    
    
  }
  pin()
  {
    var l1=(document.getElementById('l1') as HTMLInputElement);
    var l2=(document.getElementById('l2') as HTMLInputElement);
    var l3=(document.getElementById('l3') as HTMLInputElement);
    var l4=(document.getElementById('l4') as HTMLInputElement);
    var l5=(document.getElementById('l5') as HTMLInputElement);
    var l6=(document.getElementById('l6') as HTMLInputElement);
    l4.style.color="#26a69a"
    l4.style.marginBottom='25px'
    l2.style.color='black';
    l2.style.marginBottom='0px'
    l1.style.color='black';
    l1.style.marginBottom='0px'
    l3.style.color='black';
    l3.style.marginBottom='0px'
    l5.style.color='black';
    l5.style.marginBottom='0px'
    l6.style.color='black';
    l6.style.marginBottom='0px'
    
    
  }
  city()
  {
    var l1=(document.getElementById('l1') as HTMLInputElement);
    var l2=(document.getElementById('l2') as HTMLInputElement);
    var l3=(document.getElementById('l3') as HTMLInputElement);
    var l4=(document.getElementById('l4') as HTMLInputElement);
    var l5=(document.getElementById('l5') as HTMLInputElement);
    var l6=(document.getElementById('l6') as HTMLInputElement);
    l3.style.color="#26a69a"
    l3.style.marginBottom='25px'
    l2.style.color='black';
    l2.style.marginBottom='0px'
    l1.style.color='black';
    l1.style.marginBottom='0px'
    l4.style.color='black';
    l4.style.marginBottom='0px'
    l5.style.color='black';
    l5.style.marginBottom='0px'
    l6.style.color='black';
    l6.style.marginBottom='0px'
    
    
  }
  add()
  {
    var l1=(document.getElementById('l1') as HTMLInputElement);
    var l2=(document.getElementById('l2') as HTMLInputElement);
    var l3=(document.getElementById('l3') as HTMLInputElement);
    var l4=(document.getElementById('l4') as HTMLInputElement);
    var l5=(document.getElementById('l5') as HTMLInputElement);
    var l6=(document.getElementById('l6') as HTMLInputElement);
    l1.style.color="#26a69a"
    l1.style.marginBottom='25px'
    l2.style.color='black';
    l2.style.marginBottom='0px'
    l3.style.color='black';
    l3.style.marginBottom='0px'
    l4.style.color='black';
    l4.style.marginBottom='0px'
    l5.style.color='black';
    l5.style.marginBottom='0px'
    l6.style.color='black';
    l6.style.marginBottom='0px'
  }
  loc()
  {
    var l1=(document.getElementById('l1') as HTMLInputElement);
    var l2=(document.getElementById('l2') as HTMLInputElement);
    var l3=(document.getElementById('l3') as HTMLInputElement);
    var l4=(document.getElementById('l4') as HTMLInputElement);
    var l5=(document.getElementById('l5') as HTMLInputElement);
    var l6=(document.getElementById('l6') as HTMLInputElement);
    l2.style.color="#26a69a"
    l2.style.marginBottom='25px'
    l1.style.color='black';
    l1.style.marginBottom='0px'
    l3.style.color='black';
    l3.style.marginBottom='0px'
    l4.style.color='black';
    l4.style.marginBottom='0px'
    l5.style.color='black';
    l5.style.marginBottom='0px'
    l6.style.color='black';
    l6.style.marginBottom='0px'
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from '../services/leave.service';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  name = "ravi"
 constructor(private formBuilder :FormBuilder, private _LeaveService : LeaveService) {}
 
  ngOnInit() {

  }
//event fire mathode calls when click on submit button
  submit(item){

    //leavService's mathod
    this._LeaveService.leavePost(item).subscribe(data=>{
      console.log(data+" :-responce return")
    },
    error =>{
      console.log(error);
    }
  )
  }
 
}

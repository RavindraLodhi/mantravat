import{Component,OnInit} from '@angular/core'
import {ActivatedRoute,Router,Params} from '@angular/router'

@Component({
template :`<h3>you selected department with id ={{departmentId}}</h3>
          <button><p (click)="goBack()">previous</p> </button>
          <button>  <p (click)="goNext()">next</p> </button>
          <p>
          <button (click)="goBackToDepartment()">back</button>
          </p>`
})
export class departmentdetails implements OnInit {
public departmentId;
constructor(private _ActivatedRoute:ActivatedRoute,private _route:Router){}
// ngOnInit(){
//  let id = parseInt(this._ActivatedRoute.snapshot.params['id']);
//  this.departmentId=id;
// }
ngOnInit(){
    this._ActivatedRoute.params.subscribe((params:Params)=>{
   let id=parseInt(params['id']);
   this.departmentId=id;
    });
}
goBack(){
let previousId = this.departmentId-1;
this._route.navigate(['/department',previousId]);
this.departmentId=previousId;
}
goNext(){

    let nextId = this.departmentId+1;
    this._route.navigate(['/department',nextId]);
    this.departmentId=nextId;
}
goBackToDepartment(){
    console.log("goback")
let selectedId = this.departmentId? this.departmentId : null;

// this._route.navigate(['/department',{id:selectedId,name:'ravi'}]);

this._route.navigate(['../' ,{id:selectedId}],{relativeTo:this._ActivatedRoute})
}
}

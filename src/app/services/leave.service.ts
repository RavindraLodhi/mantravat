import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Headers} from '@angular/http';
import {HeaderService}  from "./header.service"
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http : HttpClient,private _HeaderService : HeaderService) { }
  leavePost(body){
    console.log(body)
    const header =this._HeaderService.config_Header(body);
    const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
     return this.http.post('http://192.168.0.16:3005/api/create_leave/',body,{headers}).pipe(map(getData => {
       console.log(getData);
     return getData;  
    }))
  }
  allLeaveHistry(){
    // const header =this._HeaderService.config_Header(body);
    const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
     return this.http.get('http://192.168.0.16:3005/api/leave_history',{headers}).pipe(map(getData => {
     return getData;  
    }))
  }
}

import { Injectable } from "@angular/core";
import { HeaderService } from "./header.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(
    private http: HttpClient,
    private _HeaderService: HeaderService
  ) {}


  getShortDes(){
       const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
       return this.http.get('http://192.168.0.16:3005/api/getTasks',{headers}).pipe(map(getData => {
       return getData;  
      }))
   }


   changTask(id){
    const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
    return this.http.get('http://192.168.0.16:3005/api/getTasks',{headers}).pipe(map(getData => {
    return getData;  
   }))
   }
   submitTask(body,isPut) {
     const header = this._HeaderService.config_Header(body);
     const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
     if(isPut){
       console.log("running put methiod");
       
      return this.http
      .put("http://192.168.0.11:3005/api/leave/101", body, { headers })
      .pipe(
        map(getData => {
          console.log(getData);
          return getData;
        })
      );
     }
     else{
      console.log("running post methiod");
      return this.http
      .post("http://192.168.0.11:3005/api/leave/101", body, { headers })
      .pipe(
        map(getData => {
          console.log(getData);
          return getData;
        })
      );
     }

     
    
   }
   displayTask(){
    const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
    return this.http.get('http://192.168.0.16:3005/api/getTasks',{headers}).pipe(map(getData => {
    return getData;  
   }))
  }
 
}

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Headers} from '@angular/http';
import {HeaderService}  from "./header.service"
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http : HttpClient,private _HeaderService : HeaderService) { }
  createProject(body){
    console.log(body +"running creat project")
     const header =this._HeaderService.config_Header(body);
     const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
      return this.http.post('http://192.168.0.16:3005/api/create_project/',body,{headers}).pipe(map(getData => {
        console.log(getData); 
      return getData;  
     }))
  }
}

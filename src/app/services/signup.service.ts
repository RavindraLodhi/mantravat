import { Injectable } from '@angular/core';
import { HeaderService } from "./header.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient,private _HeaderService : HeaderService) { }
  signup(body){
    console.log(body);
    
    console.log("signup service");
    console.log(body);
     const header =this._HeaderService.config_Header(body);
     const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
      return   this.http.post('http://192.168.0.10:3005/api/signup',body,{headers}).pipe(map(getData => {
        console.log(getData);
      return getData;
     }))
    }
  }
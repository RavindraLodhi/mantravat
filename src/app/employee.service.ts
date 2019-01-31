import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {IEmployee} from './employee'
 import {Observable} from 'rxjs/Observable'
 import {Http,Response} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private cheackArray;
 private _url:string="/assets/employeeData.json";
  constructor( private http :HttpClient) {
    
   }

  getEmployee(): Promise<any> {

      // let options = new RequestOptions({ headers: headers });
 
      return this.http
        .get(this._url)
        .toPromise();
        // console.log(data);
        // .then((res: Response) => res.json());
        // return data;
    }

  }
    // https://www.youtube.com/watch?v=LmIsbzt-S_E
  


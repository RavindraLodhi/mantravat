import { Injectable } from "@angular/core";
import { HeaderService } from "./header.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Task } from "../model/task";
import { JsonPipe } from "@angular/common";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(
    private http: HttpClient,
    private _HeaderService: HeaderService
  ) {}

  getAllTasks(): Observable<Task[]>{
    // const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
  // return this.http.get<Task[]>('http://192.168.0.16:3005/api/getTasks',{headers});  
      return this.http.get<Task[]>("./assets/data/tasks.json");
  }

   changTask(id){
    const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
    return this.http.get('http://192.168.0.16:3005/api/getTasks',{headers}).pipe(map(getData => {
    return getData;  
   }))
   }


  addTask(task: Task) {
    console.log("New task fields :: "+JSON.stringify(task));
    // const header = this._HeaderService.config_Header(task);
     const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
      return this.http.post("http://192.168.0.11:3005/api/task/add", task, { headers })
      .pipe(
        map(getData => {
          console.log(getData);
          return getData;
        })
      );
     }

 updateTask(task:Task, id:String) {
     //const header = this._HeaderService.config_Header(task);
     const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
      return this.http
      .put("http://192.168.0.11:3005/api/task/update/"+id, task, { headers })
      .pipe(
        map(getData => {
          console.log(getData);
          return getData;
        })
      );
     }
}

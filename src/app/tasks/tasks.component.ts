/***********created by Ravindra Lodhi*********** */
import { Component, OnInit, Input } from "@angular/core";
import { TaskService } from "../services/task.service";
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Task } from "../model/task";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  /****************** global bariable *********************/  
  dummyArry: any[] = [];
  isPut = false;
  atttechments: any[] = [];
  attechmentArray: any[] = [];
  form: any;
  productsLength: number = 0;
  dummyTask1: Task = new Task();
  taskList: Task[] = [];
  isDisplayTask: boolean = false;
  createTsk :boolean =true;
  /****************** contructor for create object *********************/
  constructor(
    private _TaskService: TaskService,
    private _FormBuilder: FormBuilder
  ) {}

  /****************** methode will run after constructor *********************/
  ngOnInit() {
    this.initialiseTaskForm();
  }
  get f() {
    return this.form.controls;
  }

  

  private initialiseTaskForm() {
    /****************** create form control null array *********************/
    this.form = this._FormBuilder.group({
      t_type: [this.dummyTask1.t_type, [Validators.required]],
      t_Category: [this.dummyTask1.t_Category, [Validators.required]],
      t_Name: [
        this.dummyTask1.t_Name,
        [Validators.required, Validators.pattern("[a-zA-Z ]*")]
      ],
      t_SDate: [new Date(), [Validators.required]],
      t_EDate: [new Date(), [Validators.required]],
      t_EstimetedHr: [this.dummyTask1.t_EstimetedHr, [Validators.required]],
      t_Priority: [this.dummyTask1.t_Priority, [Validators.required]],
      t_Status: [this.dummyTask1.t_Status, [Validators.required]],
      t_parentId: [this.dummyTask1.t_parentId, [Validators.required]],
      projectId: [this.dummyTask1.projectId, [Validators.required]],
      // t_CreateBy: [this.dummyTask1.t_CreateBy, [Validators.required]],
      t_Assign: [this.dummyTask1.t_Assign, [Validators.required]],
      t_LongDescription: [
        this.dummyTask1.t_LongDescription,
        [Validators.required]
      ]
    });
  }

  /****************** runs click on submit button *********************/

  addTask() {
    // this.validation();
    let newTask = this.form.value;
    newTask.attachements = this.attechmentArray;
    // console.log(JSON.stringify(newTask));
    console.log(this.dummyTask1._id );
    
    if(this.dummyTask1._id==undefined){
        this._TaskService.addTask(newTask).subscribe(
         data => {
            console.log(" response is :: " + data);
          },
          error => {
            console.log(error);
          }
        );
    }
    else{
        newTask._id = this.dummyTask1._id; 
        this._TaskService.changTask(newTask).subscribe(
          data => {
            console.log(" response is :: " + data);
          },
          error => {
            console.log(error);
          }
        );
    }
   
  }

  /****************** it is for mobile
   *  runs when click on left 
   * manu use to give dynemic
   * */
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "col-sm-2 sidebarleft divHight2") {
      console.log("if");
      x.className = "sidebarleftB";
    } else {
      console.log("else");
      x.className = "col-sm-2 sidebarleft divHight2";
    }
  }

  /****************** it is for mobile
   *  runs when click on right 
   * manu use to give dynemic class
   *  *********************/
  myFunctionFeedBack() {
    var x = document.getElementById("Feed");
    if (x.className === "col-sm-3 right-sidebar") {
      console.log("if");
      x.className = "right-sidebarB";
    } else {
      console.log("else");
      x.className = "col-sm-3 right-sidebar";
    }
  }

  //calls service methode to get all task
  getAllTasks() {
    this.DisplaycreateChangTask();
    if(this.taskList.length==0){
      this._TaskService.getAllTasks().subscribe(
        response => {
          console.log(response);
          
          this.taskList = response;
        },
        error => {
          console.log("Error occured");
        }
      );  
    }
   
  }

//calls service method for chang task acording to task id  
  updateTask(taskName) { 
    // this.createTsk =false;
    for (let task of this.taskList) {
      if (taskName == task.t_Name) {
        this.dummyTask1 = task;
        this.initialiseTaskForm();
        break;
      }
    }
  }

  //use to create task if user click on other option
  ctreate() {
    // this.createTsk =true;
    this.DisplaycreateChangTask();
    this.dummyTask1 = new Task();
    this.initialiseTaskForm();
  }

  /****************** 
   * to use validation for all field
   *  *********************/
  validation() {
    if (this.form.t_Name == null) {
      // document.getElementById("t_NameFont").innerHTML =
      //   "*Enter task Name";
      document.getElementById("t_Name").style.border = "1px solid #FC0606";
      alert("Enter task Name");
      return false;
    } else {
      if (!isNaN(this.form.t_Name)) {
        document.getElementById("t_NameFont").innerHTML =
          "*Accept charector only";
        document.getElementById("t_Name").style.border = "1px solid #FC0606";
        return false;
      }
    }
    if (this.form.t_type == null) {
    }
  }

  /****************** 
   * use for multiple Attechment 
   *  *********************/
  modo(value) {
    this.attechmentArray.push({ documentAttechments: value.target.value });
    var obj = { value: value.target.files[0].name };
    this.atttechments.push(obj);
  }

  /****************** 
   * use to remove atteched 
   * file 
   *  *********************/
  remove(index) {
    console.log(index);
    this.attechmentArray.splice(index, 1);
    this.atttechments.splice(index, 1);
  }

  //calls service method when user click on display option
  DisplayTask() {
    this.isDisplayTask = true;
    if (this.taskList.length == 0) {
      this._TaskService.getAllTasks().subscribe(
        response => {
          this.taskList = response;
        },
        error => {
          console.log("Error occured");
        }
      );
    }
  }
  DisplaycreateChangTask() {
    this.isDisplayTask = false;
  }

  // addProduct() {
  //   const product = this.createProduct();
  //   this.products.push(product);
  //   this.productsLength++;
  // }

  // deleteFieldValue(index) {
  //   this.products.removeAt(index);
  //   this.productsLength--;
  // }

  // get products() {
  //   return this.form.get("products") as FormArray;
  // }

  // createProduct(): FormGroup {
  //   return this._FormBuilder.group({
  //     documentAttechments: new FormControl("", Validators.required)
  //   });
  // }
}

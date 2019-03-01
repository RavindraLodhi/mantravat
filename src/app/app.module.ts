import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TasksComponent } from "./tasks/tasks.component";
import { ProfileComponent } from "./profile/profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { LoginComponent } from "./Login/login.component";
import { HeaderComponent } from "./header/header.component";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { LeaveComponent } from "./leave/leave.component";
import { LoginLayoutComponent } from "./login-layout/login-layout.component";
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectComponent } from './project/project.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayprojectComponent } from './displayproject/displayproject.component';
import { CreatetimesheetComponent } from './createtimesheet/createtimesheet.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';

@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LoginLayoutComponent,
        children: [
          {
            path: "",
            component: LoginComponent
          },
          {
            path: "login",
            component: LoginComponent
          }
        ]
      },
      {
        path: "",
        component: HomeLayoutComponent,
        children: [
          {
            path: "dashboard",
            component: DashboardComponent
          },
          {
            path: "leave",
            component: LeaveComponent
          },
          {
            path: "task",
            component: TasksComponent
          },
          {
            path :"timesheet",
            component :TimesheetComponent
          },
          {
            path :"project",
            component :ProjectComponent
          },
          {
            path :"displayproject",
            component :DisplayprojectComponent
          }
          , {
            path :"createtimesheet",
            component :CreatetimesheetComponent
          },
          {
            path :"leavehistory",
            component :LeavehistoryComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    LoginComponent,
    AppComponent,
    TasksComponent,
    ProfileComponent,
    DashboardComponent,
    HeaderComponent,
    HomeLayoutComponent,
    LeaveComponent,
    LoginLayoutComponent,
    TimesheetComponent,
    ProjectComponent,
    SignupComponent,
    DisplayprojectComponent,
    CreatetimesheetComponent,
    LeavehistoryComponent
  ]
})
export class AppModule {}

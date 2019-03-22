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
import { CreateteamComponent } from './createteam/createteam.component';
import { ChangeteamComponent } from './changeteam/changeteam.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';
import { DisplaytaskComponent } from "./displaytask/displaytask.component";
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangeprofileComponent } from './changeprofile/changeprofile.component';
import { DisplayteamComponent } from './displayteam/displayteam.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { ChangetimesheetComponent } from './changetimesheet/changetimesheet.component';

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
            path: "changeteam",
            component: ChangeteamComponent
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
          },
          {
            path :"createteam",
            component :CreateteamComponent
          },
          {
            path :"signup",
            component :SignupComponent
          },
          {
            path :"header",
            component :HeaderComponent
          },
          {
            path :"menu",
            component :MenuComponent
          },
          {
            path :"forgotpassword",
            component :ForgotpasswordComponent
          },
          {
            path :"profile",
            component :ProfileComponent
          },
          {
            path :"changeprofile",
            component :ChangeprofileComponent
          },
          {
            path :"leavestatus",
            component :LeavestatusComponent
          },
          {
            path :"changetimesheet",
            component :ChangetimesheetComponent
          },
          {
            path :"displayteam",
            component :DisplayteamComponent
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
    LeavehistoryComponent,
    CreateteamComponent,
    ChangeteamComponent,
    MenuComponent,
    FeedComponent,
    DisplaytaskComponent,
    ForgotpasswordComponent,
    ChangeprofileComponent,
    DisplayteamComponent,
    LeavestatusComponent,
    ChangetimesheetComponent
  ]
})
export class AppModule {}

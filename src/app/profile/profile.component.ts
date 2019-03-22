import { Component, OnInit } from '@angular/core';
import $ = require('jquery');
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $('#profile-image1').on('click', function () {
        $('#profile-image-upload').click();
      });
    });   
  }
img()
{
  var a=(document.getElementById("profile-image-upload")as HTMLElement).value
  console.log(a.substr(12,25));
  console.log(a);
  document.getElementById("profile-image1").src = '/assets/images/'+a.substr(12,25);
  
}
}

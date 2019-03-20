import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changeprofile',
  templateUrl: './changeprofile.component.html',
  styleUrls: ['./changeprofile.component.css']
})
export class ChangeprofileComponent implements OnInit {

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

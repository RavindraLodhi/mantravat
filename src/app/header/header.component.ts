import { Component, OnInit } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    



  }
  noti()
  {
    var modal1 = document.getElementById('d1');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    }

  }
  profile() {
    var modal = document.getElementById('d');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    document.getElementById('d').style.display = "block"
    console.log("running");
    console.log(document.getElementById('d').style.display == "block");

    if (document.getElementById('d').style.display =="block") {
     


    }
    else {
      this.abc();
    }

  }
  abc() {
    var modal = document.getElementById('d');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target != modal) {
        modal.style.display = "none";
      }
    }
  }
  search() {
    var b = ["Aditya", "Ravi", "Anshul", "Joy", "Garima", "Smita", "Jintendra"]
    var flag = 0;
    var a = (document.getElementById("s")as HTMLInputElement).value
    for (var i = 0; i <= b.length; i++) {
      if (b[i] == a) {
        flag = 1;
      }
    }
    if (flag == 1) {
      alert('Your search was Sucessfull ' + a + ' is an Employee of Mantravat')
    }
    else {
      alert('Your search was not Sucessfull ' + a + ' is not an Employee of Mantravat')
    }
  }

}

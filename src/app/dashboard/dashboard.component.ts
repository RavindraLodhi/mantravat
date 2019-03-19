import { Component, OnInit, HostListener } from '@angular/core';
import * as d3 from "d3";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //global variable
  dashboardMid = true;
  singup = false;
  staticsDataFromParent: any[] = [];
  ngOnInit() {
    this.pro()
    // statics data
    this.staticsDataFromParent = [{
      "EventName": 30 - (12 + 8),
      "NumberOfOccurences": 30 / 10
    },
    {
      "EventName": 30 - (10 + 8),
      "NumberOfOccurences": 30 / 12
    },
    {
      "EventName": 30 - (10 + 12),
      "NumberOfOccurences": 30 / 8
    }]

    d3.selectAll("svg > *").remove();
    this.drawPieChart();
  }
  ngOnChanges() {

  }
  //for chang coponent to edit
  onChang() {
    this.dashboardMid = false;
    this.singup = true;
  }

  // d3 pie char method
  drawPieChart = () => {
    var dataset = [];
    var name = [];
    var avg = 0;

    //to find avrage
    this.staticsDataFromParent.map(item => {
      avg = avg + item.NumberOfOccurences;
    });
    avg = 100 / avg;

    //to push the data into the Array
    this.staticsDataFromParent.map(item => {
      dataset.push(Math.floor((item.NumberOfOccurences * avg)));
      name.push(item.EventName)
    });
    //gave the height and with for svg
    const width = 120, height = 120;
    //stert peiChart create from here
    var svg = d3.select("svg");
    svg.attr("width", width)
      .attr("height", height).style('font-size', 10.5);

    var radius = Math.min(width, height) / 2;
    var innerRadius = 0;
    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    var pie = d3.pie()
      .sort(null)
      .value(function (d) { return d });

    var arcs = svg.selectAll("g.arc")
      .data(pie(dataset))
      .enter()
      .append("g")
      .attr("class", "arc")
      .attr("transform", "translate(" + radius + ", " + radius + ")");
    var color = d3.scaleOrdinal(["seagreen", "darkgreen", "yellowgreen", "yellow", "greenyellow", "lightgreen"]);

    arcs.append("path")
      .attr("fill", function (d, i) {
        console.log(d);
        return color(i);
      })
      .attr("stroke", "white")
      .attr("d", arc);


    var newarc = d3.arc()
      .innerRadius(20)
      .outerRadius(radius);

    arcs.append("text")
      .attr("transform", function (d) {
        var midAngle = d.endAngle < Math.PI ? d.startAngle / 2 + d.endAngle / 2 : d.startAngle / 2 + d.endAngle / 2 + Math.PI;
        return "translate(" + newarc.centroid(d)[0] + "," + newarc.centroid(d)[1] + ") rotate(-90) rotate(" + (midAngle * 180 / Math.PI) + ")";
      })
      .attr("dy", ".35em")
      .attr('text-anchor', 'middle')

      .attr("transform", function (d) {
        /*set the label's origin to the center of the arc
      //we have to make sure to set these before calling arc.centroid*/
        d.outerRadius = width; / *Set Outer Coordinate*/
        d.innerRadius = height / 2; / *Set Inner Coordinate*/
        return "translate(" + arc.centroid(d) + ")rotate(" + angle(d) + ")";
      })
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text(function (d) {
        return name[d.index] + " " + "days";
      });
    function angle(d) {
      var a = ((d.startAngle + d.endAngle) * 90) / Math.PI - 90;
      return a > 90 ? a - 180 : a;
    }

  }


  //  myFunction() {
  //   var modal = document.getElementById('myTopnav');
  //   console.log(modal.className);
  //   var iconObj = document.getElementById('icon');
  //   // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function(event) {
  //     console.log(event.target);
  //       if (event.target == iconObj) {
  //         console.log("running");
  //         modal.className = "sidebarleftB"
  //       }
  //       else{
  //         modal.className = "sidebarleft";
  //       }
  //   }

  // }
  // @HostListener('document:click', ['$event'])
  // documentClick(event: MouseEvent) {
  //   var modal = document.getElementById('myTopnav');
  //   console.log(modal.className);
  //   var iconObj = document.getElementById('icon');
  //   // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function(event) {
  //     console.log(event.target);
  //       if (event.target == iconObj) {
  //         console.log("running");
  //         modal.className = "sidebarleftA"
  //       }
  //       else{
  //         modal.className = "sidebarleftB";
  //       }
  //   }
  // }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "col-sm-2 sidebarleft") {
      x.className = "sidebarleftB";
    } else {
      x.className = "col-sm-2 sidebarleft";
    }
  }

  myFunctionFeedBack() {
    var x = document.getElementById("Feed");
    console.log(x)
    if (x.className === "col-sm-3  right-sidebar") {
      x.className = "right-sidebarB";
    } else {
      x.className = "col-sm-3  right-sidebar";
    }
  }
  pro() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }



  }
  project() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l2.style.display="none";
   l3.style.display="none";
   l4.style.display="none";
   l5.style.display="none";
   l6.style.display="none";
   l7.style.display="none";

  }
  task() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l3.style.display="none";
   l4.style.display="none";
   l5.style.display="none";
   l6.style.display="none";
   l7.style.display="none";

  }
  team() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l2.style.display="none";
   l4.style.display="none";
   l5.style.display="none";
   l6.style.display="none";
   l7.style.display="none";

  }
  leave() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l3.style.display="none";
   l2.style.display="none";
   l5.style.display="none";
   l6.style.display="none";
   l7.style.display="none";

  }
  timesheet() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l3.style.display="none";
   l4.style.display="none";
   l2.style.display="none";
   l6.style.display="none";
   l7.style.display="none";

  }
  login() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l3.style.display="none";
   l4.style.display="none";
   l5.style.display="none";
   l2.style.display="none";
   l7.style.display="none";

  }
  profile() {
    var l1 = (document.getElementById('projects') as HTMLInputElement);
    var l2 = (document.getElementById('tasks') as HTMLInputElement);
    var l3 = (document.getElementById('teams') as HTMLInputElement);
    var l4 = (document.getElementById('leaves') as HTMLInputElement);
    var l5 = (document.getElementById('timesheets') as HTMLInputElement);
    var l6 = (document.getElementById('logins') as HTMLInputElement);
    var l7 = (document.getElementById('profiles') as HTMLInputElement);
   l1.style.display="none";
   l3.style.display="none";
   l4.style.display="none";
   l5.style.display="none";
   l6.style.display="none";
   l2.style.display="none";

  }
}

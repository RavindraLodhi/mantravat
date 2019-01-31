import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { NgForm } from "@angular/forms";
import { ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import * as d3 from "d3";
import { DataService } from "./data-service.service";
import { Task } from "./model/task";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit {
    staticsDataFromParent :any[] = [];
    ngOnInit() { }
    //   this.staticsDataFromParent =  [ {
    //         "EventName": 30-(12+8),
    //         "NumberOfOccurences": 30/10
    //     },
    //     {
    //         "EventName": 30-(10+8),
    //         "NumberOfOccurences": 30/12
    //     },
    //     {
    //         "EventName": 30-(10+12),
    //         "NumberOfOccurences": 30/8
    //     }]

    //     d3.selectAll("svg > *").remove();
    //     this.drawPieChart();
    // }
    // ngOnChanges(){
    
    // }
      
    //   drawPieChart=() => {
    //     var dataset=[];
    //     var name = [];
    //     var avg=0;  
  
    //     //to find avrage
    //      this.staticsDataFromParent.map(item => {
    //        avg=avg+item.NumberOfOccurences;
    //      });
    //     avg = 100/avg;
        
    //     //to push the data into the Array
    //      this.staticsDataFromParent.map(item => {
    //        dataset.push(Math.floor((item.NumberOfOccurences*avg)));
    //        name.push(item.EventName)
    //      });
    //     //gave the height and with for svg
    //     const width = 120, height = 120;
    //     //stert peiChart create from here
    //     var svg = d3.select("svg");
    //     svg.attr("width", width)
    //         .attr("height", height).style('font-size', 10.5);
        
    //     var radius =Math.min(width,height) / 2;
    //     var innerRadius = 0;
    //     var arc = d3.arc()
    //            .innerRadius(0)
    //            .outerRadius(radius); 
    
    //     var pie = d3.pie()
    //     .sort(null)
    //     .value(function(d) { return d});
        
    //     var arcs = svg.selectAll("g.arc")
    //         .data(pie(dataset))
    //         .enter()
    //         .append("g")
    //         .attr("class", "arc")
    //         .attr("transform", "translate(" + radius + ", " + radius + ")");
    //     var color = d3.scaleOrdinal(["seagreen","darkgreen", "yellowgreen", "yellow", "greenyellow", "lightgreen"]);
        
    //     arcs.append("path")
    //         .attr("fill", function (d, i) {
    //         console.log(d);
    //         return color(i);
    //     })
    //         .attr("stroke", "white")
    //         .attr("d", arc);
        
        
    //     var newarc = d3.arc()
    //         .innerRadius(20)
    //         .outerRadius(radius);
        
    //     arcs.append("text")
    //       .attr("transform", function(d) { 
    //           var midAngle = d.endAngle < Math.PI ? d.startAngle/2 + d.endAngle/2 : d.startAngle/2  + d.endAngle/2 + Math.PI ;
    //           return "translate(" + newarc.centroid(d)[0] + "," + newarc.centroid(d)[1] + ") rotate(-90) rotate(" + (midAngle * 180/Math.PI) + ")"; })
    //       .attr("dy",".35em")
    //       .attr('text-anchor','middle')
  
    //    .attr("transform", function(d) {
    //     /*set the label's origin to the center of the arc
    //   //we have to make sure to set these before calling arc.centroid*/
    //     d.outerRadius = width; / *Set Outer Coordinate*/
    //     d.innerRadius = height / 2; / *Set Inner Coordinate*/
    //     return "translate(" + arc.centroid(d) + ")rotate(" + angle(d) + ")";
    //   })
    //   .attr("text-anchor", "middle")
    //   .attr("fill", "white")
    //   .text(function(d) {
    //     return  name[d.index]+" "+"days";
    //   });
    // function angle(d) {
    //   var a = ((d.startAngle + d.endAngle) * 90) / Math.PI - 90;
    //   return a > 90 ? a - 180 : a;
    // }
  
    //   }
}

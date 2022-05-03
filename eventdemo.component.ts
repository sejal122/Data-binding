import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

  constructor() { }

  name="Guest";

display(name){
  this.name=name;
  console.log("Name : "+this.name);
}

  ngOnInit() {
  }

}

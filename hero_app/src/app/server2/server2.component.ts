import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  serverName = "";

  allNewserver = false;

serverCreated = false;

  constructor() { }

  ngOnInit() {
  }

  addNewServer(): void{
  	console.log("click"+this.serverName);
  	this.allNewserver = true;
  	this.serverCreated = true;
  }

}

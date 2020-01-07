import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  servers = [];

  counter = 0;

  
  constructor() { };

  ngOnInit() {
  	
  };

  OnAddServer(){
  	this.servers.push("My Server "+(this.counter++));
  };

  onRemoveServer(id:number){

  	this.servers.splice(id, 1);
  }

}

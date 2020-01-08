import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {


  profiles:any[] = [];
  constructor() { }

  ngOnInit() {
    
  }

  addProfile(profile:any){
    console.log(profile)
    this.profiles.push(profile);
  }

}

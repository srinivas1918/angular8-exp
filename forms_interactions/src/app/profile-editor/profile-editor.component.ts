import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileListComponent } from '../profile-list/profile-list.component'

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

 
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    employeeId: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  
 
  
  

  constructor(){
  }

  updateProfile(){
   
    //patch value upates the form values with matching props
    this.profileForm.patchValue({
      firstName: 'Srinivas',
      lastName:'Nalla',
      employeeId:'14096',
      address:{
        street:'test street',
        city:'test City',
        state:'test state',
        zip: '1244-00'
      }
    });
  }
}
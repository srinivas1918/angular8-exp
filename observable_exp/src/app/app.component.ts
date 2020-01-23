import { Component, AfterViewInit, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { fromEvent, Observable, Subject, BehaviorSubject, from, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{
 
  changeLog = new EventEmitter<string>();

  keyTextSubject = new Subject<string>();

  keyTextBSubject = new BehaviorSubject<string>("Behaviour SUbject");

  keyTextRSubject = new ReplaySubject<string>(1);  // Buffer
  
  nameChangeLog: string[] = [];
  heroForm: FormGroup;

  userForm = new FormGroup({  
    userKey: new FormControl('')
  });

  
 

  logNameChange() {

    // using Observable with Reactive Form API  ( can be moved to ngAfterViewInit )
    const nameControl = this.userForm.get('userKey');
    nameControl.valueChanges.subscribe({
      next: (v) => console.log("from Observer with Reactive from ", v)
    })
   
  }

  ngOnInit() {
    this.logNameChange();
   

  }
 
  
  constructor(){

    // Practise

/*
    const subject = new Subject<number>();
    
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
    
    subject.next(1);
    subject.next(2);

console.log("observable")
const foo = new Observable(subscriber => {
  
  subscriber.next(42);
  subscriber.next(43)
});
 
foo.subscribe(x => {
  console.log(x);
});
foo.subscribe(y => {
  console.log(y);
});


// Behaviour subject 

const bsubject = new BehaviorSubject(0); // 0 is the initial value

bsubject.next(1)
bsubject.next(2)
bsubject.subscribe({
  next: (v) => console.log(`B observerA: ${v}`)
});
 
bsubject.next(3)
 
bsubject.subscribe({
  next: (v) => console.log(`B observerB: ${v}`)
})


//

const array = [10, 20, 30];
const result = from(array);



console.log(array)


result.subscribe({
  next: (v) => console.log(v)
})

*/


// Subscribe to keyup events using subject

  this.keyTextSubject.subscribe({
    next: (v) => console.log("from Subject", v)
  })

  // emits the inital value + emited value from keyup()
  this.keyTextBSubject.subscribe({
    next: (v) => console.log("from Behaviour Subject", v)
  });


  this.keyTextRSubject.subscribe({
    next: (v) => console.log("from Reply subject", v)
  })
  // Subscribe to keyup events using Behaviour subject


  };

  ngAfterViewInit(){

    // Example Using observer with Template form 

    this.changeLog.emit("emited");
    const el = document.getElementById('search');

    // Create an Observable that will publish mouse movements
      const onkeyEvent = fromEvent(el, 'keyup');
    
        onkeyEvent.subscribe((evt:KeyboardEvent) => {
          const value = (event.target as HTMLInputElement).value
          console.log("Observable with Template inputs ", value);
          this.changeLog.emit(value)
        });


     
        
  }

  onkeyUp(event:KeyboardEvent):void{
     
     console.log("Example using Subject");

     // Example Using Subject
    this.keyTextSubject.next("=> Subject value "+this.userForm.get('userKey').value)
    this.keyTextBSubject.next("=> Behaviour Subject value "+this.userForm.get('userKey').value)
    this.keyTextRSubject.next("=> Reply subjects value "+this.userForm.get('userKey').value)
    

  }

}

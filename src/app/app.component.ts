import { LoginService } from './auth/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularFirebaseAuth';
  // user: firebase.User;
  constructor (private afAuth: AngularFireAuth, 
    private LoginService: LoginService){
    
  }

  ngOnInit(){
    // this.afAuth.authState
    // .subscribe(user => {
    //   console.log(user); 
    //   this.user = user;
    // })
    
  }
}

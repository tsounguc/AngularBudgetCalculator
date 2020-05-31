import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth : AngularFireAuth) { 
    
  }

  login(){
    console.log('Redirectin to Google login provider');
    this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider())
  }

  logout(){
    this.afAuth.signOut();
  }

  getLoggedInsuser(){
    return this.afAuth.authState;
  }

}

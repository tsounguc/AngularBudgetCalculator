import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: firebase.User;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.service.getLoggedInsuser().subscribe(user => {
      console.log(user);
      this.user = user;
    })
  }

  loginGoogle(){
    console.log('Login...');
    this.service.login();
  }

  logout(){
    this.service.logout();
  }

}

import { LoginService } from './../auth/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: firebase.User;

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
    this.LoginService.getLoggedInsuser()
    .subscribe((user)=>{
      this.user = user;
    })
  }

  logout() {
    this.LoginService.logout();
  }

}

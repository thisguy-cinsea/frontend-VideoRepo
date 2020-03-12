import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = new User();
  signIn = false;
  object;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(username: string, password: string) {
    this.user.userName = username;
    this.user.password = password;
    this.userService.loginUser(this.user).subscribe(result => {
      this.object = result;
      this.checkStatus();
    });
  }

  checkStatus() {
    if (this.object != null) {
      this.signIn = true;
      this.router.navigate(["/videos"]);
    } else {
      this.signIn = false;
    }
  }
}

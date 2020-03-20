import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = new User();
  signIn = true;
  object;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    console.log("onInit.signIn", this.signIn);
  }

  loginUser(username: string, password: string) {
    this.user.userName = username;
    this.user.password = password;
    this.userService.loginUser(this.user).subscribe(result => {
      this.object = result;
      this.checkStatus();
    });
  }

  registerUser(username: string, password: string) {
    this.user.userName = username;
    this.user.password = password;
    this.userService.addUser(this.user)
    .subscribe(result => {
      this.object = result;
      this.signIn = true;
      // this.checkStatus();
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

  changeForm() {
    console.log("changeForm.signIn.before", this.signIn);

    if (this.signIn)
      this.signIn = false;
    else
      this.signIn = true;
    console.log("changeForm.signIn.after", this.signIn);
    // console.log(waits(4));

    // this.router.navigate(["'/login', '"+this.signIn+"'"]);
  }

}

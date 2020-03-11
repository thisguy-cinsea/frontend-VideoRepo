import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  user = new User();
  signIn = true;
  headingText = "Login"

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  loginUser(formUser: User){
    console.log("login.component: ", formUser);
    // this.userService.loginUser(formUser);
  }

}

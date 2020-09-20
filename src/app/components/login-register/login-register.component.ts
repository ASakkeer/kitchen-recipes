import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  rememberChecked;
  userName;
  userPassword;

  constructor() {
    this.rememberChecked = false;
    this.userName = '';
    this.userPassword = '';
  }

  ngOnInit(): void {
  }

  rememberClick() {
    this.rememberChecked = !this.rememberChecked;
  }

  namePasswordVerify(field) {
    console.log(field)
  }

  onSubmit() {
    console.log(this.userName, this.userPassword)
  }

}

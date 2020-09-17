import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  rememberChecked;

  constructor() {
    this.rememberChecked = false
  }

  ngOnInit(): void {
  }

  rememberClick() {
    this.rememberChecked = !this.rememberChecked;
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['login']);
  }

  goToRegister() {
    this.router.navigate(['signup']);
  }

  goToForgotPassword() {
    this.router.navigate(['forgot-password']);
  }

}

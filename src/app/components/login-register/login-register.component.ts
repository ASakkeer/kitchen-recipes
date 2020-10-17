import { Component, OnInit } from '@angular/core';

import {
  bounceAnimation, flashAnimation, pulseAnimation, rubberBandAnimation, shakeAnimation,
  swingAnimation, tadaAnimation, wobbleAnimation, jelloAnimation, heartBeatAnimation,
  headShakeAnimation, bounceInAnimation, bounceInDownAnimation, bounceInLeftAnimation,
  bounceInRightAnimation, bounceInUpAnimation, bounceOutAnimation, bounceOutDownAnimation,
  bounceOutLeftAnimation, bounceOutRightAnimation, bounceOutUpAnimation, fadeInAnimation,
  fadeInDownAnimation, fadeInDownBigAnimation, fadeInLeftAnimation, fadeInLeftBigAnimation,
  fadeInRightAnimation, fadeInRightBigAnimation, fadeInUpAnimation, fadeInUpBigAnimation,
  fadeOutAnimation, fadeOutDownAnimation, fadeOutDownBigAnimation, fadeOutLeftAnimation,
  fadeOutLeftBigAnimation, fadeOutRightAnimation, fadeOutRightBigAnimation, fadeOutUpAnimation,
  fadeOutUpBigAnimation, flipAnimation, flipInXAnimation, flipInYAnimation, flipOutXAnimation,
  flipOutYAnimation, lightSpeedInAnimation, lightSpeedOutAnimation, rotateInAnimation,
  rotateInDownLeftAnimation, rotateInDownRightAnimation, rotateInUpLeftAnimation,
  rotateInUpRightAnimation, rotateOutAnimation, rotateOutDownLeftAnimation, rotateOutDownRightAnimation,
  rotateOutUpLeftAnimation, rotateOutUpRightAnimation, slideInDownAnimation, slideInLeftAnimation,
  slideInRightAnimation, slideInUpAnimation, slideOutDownAnimation, slideOutLeftAnimation,
  slideOutRightAnimation, slideOutUpAnimation, zoomInAnimation, zoomInDownAnimation,
  zoomInLeftAnimation, zoomInRightAnimation, zoomInUpAnimation, zoomOutAnimation,
  zoomOutDownAnimation, zoomOutLeftAnimation, zoomOutRightAnimation, zoomOutUpAnimation,
  hingeAnimation, jackInTheBoxAnimation, rollInAnimation, rollOutAnimation,
  // other
  collapseAnimation, collapseHorizontallyAnimation, rotateAnimation,
  bounceInUpOnEnterAnimation, hueRotateAnimation
} from 'angular-animations';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 200 }),
    bounceAnimation({ anchor: 'enter4', delay: 2000 }),
    flashAnimation({ anchor: 'enter5' }),
    pulseAnimation({ anchor: 'enter5' }),
    rubberBandAnimation({ anchor: 'enter7' }),
    shakeAnimation({ anchor: 'enter8', delay: 200 }),
    swingAnimation({ anchor: 'enter9' }),
    tadaAnimation({ anchor: 'enter10' }),
    wobbleAnimation({ anchor: 'enter11' }),
    jelloAnimation({ anchor: 'enter12' }),
    heartBeatAnimation({ anchor: 'enter13' }),
    headShakeAnimation({ anchor: 'enter14' }),
    bounceInAnimation({ anchor: 'enter15' }),
    bounceInDownAnimation({ anchor: 'enter16' }),
    bounceInLeftAnimation({ anchor: 'enter17' }),
    bounceInRightAnimation({ anchor: 'enter18' }),
    bounceInUpAnimation({ anchor: 'enter19' }),
    bounceOutAnimation({ anchor: 'enter20' }),
    bounceOutDownAnimation({ anchor: 'enter21' }),
    bounceOutLeftAnimation({ anchor: 'enter22' }),
    bounceOutRightAnimation({ anchor: 'enter23' }),
    bounceOutUpAnimation({ anchor: 'enter24' }),
    fadeInAnimation({ anchor: 'enter25' }),
    fadeInDownAnimation({ anchor: 'enter26', delay: 2000 }),
    fadeInDownBigAnimation({ anchor: 'enter27' }),
    fadeInLeftAnimation({ anchor: 'enter28' }),
    fadeInLeftBigAnimation({ anchor: 'enter29' }),
    fadeInRightAnimation({ anchor: 'enter30' }),
    fadeInRightBigAnimation({ anchor: 'enter31' }),
    fadeInUpAnimation({ anchor: 'enter32' }),
    fadeInUpBigAnimation({ anchor: 'enter33' }),
    fadeOutAnimation({ anchor: 'enter34' }),
    fadeOutDownAnimation({ anchor: 'enter35' }),
    fadeOutDownBigAnimation({ anchor: 'enter36' }),
    fadeOutLeftAnimation({ anchor: 'enter37' }),
    fadeOutLeftBigAnimation({ anchor: 'enter38' }),
    fadeOutRightAnimation({ anchor: 'enter39' }),
    fadeOutRightBigAnimation({ anchor: 'enter40' }),
    fadeOutUpAnimation({ anchor: 'enter41' }),
    fadeOutUpBigAnimation({ anchor: 'enter42' }),
    flipAnimation({ anchor: 'enter43' }),
    flipInXAnimation({ anchor: 'enter44' }),
    flipInYAnimation({ anchor: 'enter45' }),
    flipOutXAnimation({ anchor: 'enter46' }),
    flipOutYAnimation({ anchor: 'enter47' }),
    lightSpeedInAnimation({ anchor: 'enter48' }),
    lightSpeedOutAnimation({ anchor: 'enter49' }),
    rotateInAnimation({ anchor: 'enter50' }),
    rotateInDownLeftAnimation({ anchor: 'enter51' }),
    rotateInDownRightAnimation({ anchor: 'enter52' }),
    rotateInUpLeftAnimation({ anchor: 'enter53' }),
    rotateInUpRightAnimation({ anchor: 'enter54' }),
    rotateOutAnimation({ anchor: 'enter55' }),
    rotateOutDownLeftAnimation({ anchor: 'enter56' }),
    rotateOutDownRightAnimation({ anchor: 'enter57' }),
    rotateOutUpLeftAnimation({ anchor: 'enter58' }),
    rotateOutUpRightAnimation({ anchor: 'enter59' }),
    slideInDownAnimation({ anchor: 'enter60' }),
    slideInLeftAnimation({ anchor: 'enter61' }),
    slideInRightAnimation({ anchor: 'enter62' }),
    slideInUpAnimation({ anchor: 'enter63' }),
    slideOutDownAnimation({ anchor: 'enter64' }),
    slideOutLeftAnimation({ anchor: 'enter65' }),
    slideOutRightAnimation({ anchor: 'enter66' }),
    slideOutUpAnimation({ anchor: 'enter67' }),
    zoomInAnimation({ anchor: 'enter68' }),
    zoomInDownAnimation({ anchor: 'enter69' }),
    zoomInLeftAnimation({ anchor: 'enter70' }),
    zoomInRightAnimation({ anchor: 'enter71' }),
    zoomInUpAnimation({ anchor: 'enter72' }),
    zoomOutAnimation({ anchor: 'enter73' }),
    zoomOutDownAnimation({ anchor: 'enter74' }),
    zoomOutLeftAnimation({ anchor: 'enter75' }),
    zoomOutRightAnimation({ anchor: 'enter76' }),
    zoomOutUpAnimation({ anchor: 'enter77' }),
    hingeAnimation({ anchor: 'enter78' }),
    jackInTheBoxAnimation({ anchor: 'enter79' }),
    rollInAnimation({ anchor: 'enter80' }),
    rollOutAnimation({ anchor: 'enter81' }),
    // other
    collapseAnimation({ anchor: 'enter82' }),
    collapseHorizontallyAnimation({ anchor: 'enter83' }),
    rotateAnimation({ anchor: 'enter84' }),
    rotateAnimation({ anchor: 'enter85', degrees: 90 }),
    hueRotateAnimation({ anchor: 'enter86' }),
    hueRotateAnimation({ anchor: 'enter87', duration: 20000 })
  ]
})
export class LoginRegisterComponent implements OnInit {

  isLoginScreen = true;
  isForgotScreen = false;
  loginData;
  signUpData;
  forgotData;
  displayError = false;

  constructor() {
    this.isLoginScreen = true;
    this.isForgotScreen = false;
    this.displayError = false;

    this.loginData = {
      username: '',
      password: '',
      remember_me: false
    };
    this.signUpData = {
      username: '',
      email: '',
      password: '',
      confirm_password: ''
    };
    this.forgotData = {
      email: ''
    };
  }

  ngOnInit(): void {
  }

  rememberClick() {
    this.loginData.remember_me = !this.loginData.remember_me;
  }

  namePasswordVerify(field) {
    console.log(field);
  }

  onSubmit(checkSubmit) {
    if (checkSubmit === 1) {
      if (this.loginData.username !== '' && this.loginData.password !== '') {
        console.log(this.loginData);
      }
    } else if (checkSubmit === 2) {
      if (this.signUpData.username !== '' && this.signUpData.email !== '' &&
        this.signUpData.password !== '' && this.signUpData.confirm_password !== '') {
        console.log(this.signUpData);
      }
    } else if (checkSubmit === 3) {
      if (this.forgotData.email !== '') {
        console.log(this.forgotData);
      }
    }
  }

  changeScreen(screenValue) {
    this.loginData = {
      username: '',
      password: '',
      remember_me: false
    };
    this.signUpData = {
      username: '',
      email: '',
      password: '',
      confirm_password: ''
    };
    this.forgotData = {
      email: ''
    };
    if (screenValue === 1) {
      this.isLoginScreen = false;
      this.isForgotScreen = false;
    } else if (screenValue === 2) {
      this.isLoginScreen = true;
      this.isForgotScreen = false
    } else if (screenValue === 3) {
      this.isForgotScreen = true;
    }
  }

}

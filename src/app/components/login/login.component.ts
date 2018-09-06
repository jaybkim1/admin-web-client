import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { GlobalService } from './../../services/global.service';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  isLogin = false;

  // regular expression
  emailPattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[!,@,#,$,%,^,&,*,?,_,~]).{8,20}/;

  constructor(
    private formBuilder: FormBuilder,
    private global: GlobalService,
    private http: HttpClient,
  ) {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      'password': ['', Validators.compose([Validators.required, Validators.pattern(this.passwordPattern), Validators.minLength(8)])],
      'isInvalid': [false]
    });
  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields


  login(value) {
    console.log(value.email)
    console.log(value.password)
  }

  // login() {
  //   this.isLogin = true;

  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   const formModel = this.loginForm.value;
  //   const formData = new FormData();
  //   formData.append('email', formModel.email);
  //   formData.append('password', formModel.password);

  //   console.log(formModel.email)
  //   console.log(formModel.password)

  // }

}

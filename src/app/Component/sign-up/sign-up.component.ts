import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetailService } from '../../Service/user-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  signUpDetail: FormGroup = this.InitializeUserDetail();

  TriggerValidation : boolean = false;

  constructor(private fb: FormBuilder, private Service : UserDetailService, private router : Router) { }

  InitializeUserDetail() {
    return this.fb.group({
      userName: ['', [Validators.maxLength(250), Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.maxLength(250)]],
      address: ['', [Validators.maxLength(1000)]],
      phoneNumber: ['', [Validators.required]],
      isIssuer: [false],
      isSmoker: [false]
    });
  }

  CreateUser() {
    if (this.signUpDetail.valid) {
      this.Service.Add(this.signUpDetail.value).subscribe(item => {
        this.router.navigate(["/home"]);
      });
    }
    else
    {
      this.TriggerValidation = true;
      confirm("check data");
    }
    console.log(this.signUpDetail.value);
  }

  ClearControl() {
    this.signUpDetail = this.InitializeUserDetail();
  }
}

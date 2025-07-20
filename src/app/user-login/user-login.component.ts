import { Component } from '@angular/core';
import { UserDetailService } from '../Service/user-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userName: string = "";
  password: string = "";
  message : string = "";

  constructor(private service: UserDetailService, private router : Router) {
  }

  login() {
    this.service.ValidateUser(this.userName, this.password)
      .subscribe((res) => {
        console.log(res);
        if(res.data != null)
        {
            this.router.navigate(["/home"]);
        }
        else
        {
            this.message = res.message;
        }
      });
  }

  signup() {

  }
}

import { Component } from '@angular/core';
import { UserDetailService } from '../../Service/user-detail.service';
import { Router } from '@angular/router';
import { ConfigurationService } from '../../Config/configuration.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userName: string = "";
  password: string = "";
  message: string = "";

  constructor(private service: UserDetailService, private router: Router, private configService: ConfigurationService) {
  }

  login() {
    this.service.ValidateUser(this.userName, this.password)
      .subscribe((res) => {
        console.log(res);
        if (res.data != null) {
          this.configService.MenuList = [
            {
              menuName: "Insurance Plans",
              path: "insurancePlans"
            },
            {
              menuName: "User Login",
              path: "userLogin"
            },
            {
              menuName: "Sign Up",
              path: "signUp"
            }
          ]

          localStorage.setItem("token", res.data);
          this.router.navigate(["/home"]);
        }
        else {
          this.message = res.message;
        }
      });
  }

  signup() {

  }
}

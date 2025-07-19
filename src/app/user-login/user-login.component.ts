import { Component } from '@angular/core';
import { UserDetailService } from '../Service/user-detail.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  constructor(private service: UserDetailService) {

  }
}

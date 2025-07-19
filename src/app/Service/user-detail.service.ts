import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserDetail } from '../Model/user-detail';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private httpClient : HttpClient) { }

  ValidateUser(UserName: string, Password: string) {
    this.httpClient.get(`ValidateUser/${UserName}/${Password}`);
  }

  Add(userDetail: UserDetail) {
    this.httpClient.post("Add", userDetail);
  }

  Update(userDetail: UserDetail) {
    this.httpClient.post("Update", userDetail);
  }

  GetAllAcquirer(PageNumber: number, PageSize: number) {
    this.httpClient.get(`GetAllAcquirer/${PageNumber}/${PageSize}`);
  }

  GetUserData(UserDetalID: number) {
    this.httpClient.get(`GetUserData/${UserDetalID}`);
  }
}

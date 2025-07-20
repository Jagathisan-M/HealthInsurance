import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserDetail } from '../Model/user-detail';
import { PageData } from '../Model/PageData';
import { Observable } from 'rxjs';
import { PaginationData } from '../Model/PaginationData';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private httpClient : HttpClient) { }

  ValidateUser(UserName: string, Password: string) : Observable<PageData> {
    return this.httpClient.get<PageData>(`UserDetail/ValidateUser/${UserName}/${Password}`);
  }

  Add(userDetail: UserDetail) : Observable<UserDetail> {
    return this.httpClient.post<UserDetail>("UserDetail/Add", userDetail);
  }

  Update(userDetail: UserDetail) : Observable<UserDetail> {
    return this.httpClient.post<UserDetail>("UserDetail/Update", userDetail);
  }

  GetAllAcquirer(PageNumber: number, PageSize: number) : Observable<PaginationData> {
    return this.httpClient.get<PaginationData>(`UserDetail/GetAllAcquirer/${PageNumber}/${PageSize}`);
  }

  GetUserData(UserDetalID: number) : Observable<PageData> {
    return this.httpClient.get<PageData>(`UserDetail/GetUserData/${UserDetalID}`);
  }
}

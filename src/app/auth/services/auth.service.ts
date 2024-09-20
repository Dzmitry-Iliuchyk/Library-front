import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GetUserResponse } from '../types/GetUserResponse.interface';
import { CurrentUser } from '../../shared/types/CurrentUser.interface';
import { RegisterRequest } from '../types/registerRequest.interface';
import { LoginRequest } from '../types/loginRequest.interface';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<void> {
    const url = environment.apiURL + '/User/Register';
    return this.http.post<void>(url, data);
  }

  login(data: LoginRequest): Observable<any> {
    const url = environment.apiURL + '/User/Login';
    return this.http.post<any>(url, data);
  }

  loginByRefresh(): Observable<any> {
    const url = environment.apiURL + '/User/LoginByRefresh';
    return this.http.post<any>(url, null, { withCredentials: true });
  }

  logout(): Observable<any> {
    const url = environment.apiURL + '/User/Logout';
    return this.http.post<any>(url, {});
  }

  getCurrentUser(userId :string): Observable<CurrentUser> {
    const url = environment.apiURL + '/User'+`/${userId}`+ '/Get';
    return this.http.get<GetUserResponse>(url);
  }

}

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';

@Injectable()
export class JwtService {
  constructor(private cookieService: CookieService) {}

  getToken(): string | null {
    return this.cookieService.get('Auth-Cookies');
  }

  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  getUserId(): string | null {
    const decodedToken = this.decodeToken();
    if (decodedToken) {
      return decodedToken.UserId;
    }
    return null;
  }
}
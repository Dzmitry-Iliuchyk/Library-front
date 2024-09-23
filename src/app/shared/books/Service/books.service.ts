import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { BooksRequest } from '../types/BooksRequest.intrface';
import { BooksResponse } from '../types/booksResponce';
import { environment } from '../../../../environments/environment';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}
  getBooks(url: string , request: BooksRequest): Observable<BooksResponse> {
    const apiUrl: string = environment.apiURL + url;
    console.log("BookService", apiUrl)
    return this.http.post<BooksResponse>(apiUrl, request, { withCredentials: true });
  }
}

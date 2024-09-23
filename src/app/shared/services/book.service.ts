import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books/types/booksResponce';
import { environment } from '../../../environments/environment';

@Injectable()
export class BookService {
  getImage(base64stringImage: any): string {
    const imgSrc = `data:image/png;base64,${base64stringImage}`;
    //console.log("getImage", imgSrc)
    return imgSrc;
  }

  getBook(guid : string): Observable<Book>{
    const apiUrl: string = environment.apiURL + `/Book/${guid}/GetById`; 
    return this.http.get<Book>(apiUrl,{withCredentials: true});
  }
  deleteBook(guid : string): Observable<any>{
    const apiUrl: string = environment.apiURL + `/Book/${guid}/Delete`; 
    return this.http.delete(apiUrl,{withCredentials: true});
  }
  freeBook(guid : string): Observable<any>{
    const apiUrl: string = environment.apiURL + `/Book/${guid}/FreeBook`; 
    return this.http.post<Book>(apiUrl,null,{withCredentials: true});
  }
  takeBook(guid : string): Observable<any>{
    const apiUrl: string = environment.apiURL + `/Book/${guid}/TakeBook`; 
    return this.http.post<Book>(apiUrl,null,{withCredentials: true});
  }
  constructor(private http:HttpClient) { }
}

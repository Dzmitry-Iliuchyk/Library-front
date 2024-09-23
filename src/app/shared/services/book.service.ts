import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books/types/booksResponce';
import { environment } from '../../../environments/environment';
import { BookInput } from '../types/BookInput.interface';
import { BookUpdateRequest } from '../types/BookUpdateRequest';

@Injectable()
export class BookService {
  getImage(base64stringImage: any): string {
    const imgSrc = `data:image/png;base64,${base64stringImage}`;
    //console.log("getImage", imgSrc)
    return imgSrc;
  }

  createBook(formData: FormData): Observable<any>{
    const apiUrl: string = environment.apiURL + `/Book/Create`; 
    return this.http.post<Book>(apiUrl, formData,{withCredentials: true});
  }
  editBook(guid : string,  formData: FormData): Observable<any>{

    formData.append("bookId", guid);
    console.log("editBookService",guid , formData)
    const apiUrl: string = environment.apiURL + `/Book/Update`; 
    return this.http.put<Book>(apiUrl, formData,{withCredentials: true});
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

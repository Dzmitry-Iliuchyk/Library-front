import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { getBooksAction, getBooksFailureAction, getBooksSuccessAction } from '../actions/getBooks.actions';
import { BookService } from '../../Service/books.service';
import { BooksResponse } from '../../types/booksResponce';
import { BackEndErrors } from '../../../types/BackEndErrors.interface';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class GetBooksEffect {
  getBooksAction$ = createEffect(() =>
    this.action$.pipe(
      ofType(getBooksAction),
      switchMap(({url, request}) => {
        return this.bookService.getBooks(url, request).pipe(
          map((books: BooksResponse) => {
            return getBooksSuccessAction({ books });
          }),
          catchError((errors: HttpErrorResponse) => {
            return of(getBooksFailureAction({errors: errors.error}));
          })
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private bookService: BookService,
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { BackEndErrors } from '../../../types/BackEndErrors.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { getBookAction, getBookFailureAction, getBookSuccessAction } from '../actions/getBooks.actions';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../books/types/booksResponce';


@Injectable()
export class GetBookEffect {
  getBooksAction$ = createEffect(() =>
    this.action$.pipe(
      ofType(getBookAction),
      switchMap(({guid}) => {
        return this.bookService.getBook(guid).pipe(
          map((book: Book) => {
            return getBookSuccessAction({ book });
          }),
          catchError((errors: BackEndErrors) => {
            return of(getBookFailureAction({errors: errors}));
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

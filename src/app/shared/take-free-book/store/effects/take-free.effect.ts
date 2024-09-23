import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { freeBookAction, freeBookFailureAction, freeBookSuccessAction, takeBookAction, takeBookFailureAction, takeBookSuccessAction } from '../actions/take-free.action';
import { BookService } from '../../../services/book.service';
import { deleteBookFailureAction, deleteBookSuccessAction } from '../../../book/store/actions/deleteBook.action';
import { BackEndErrors } from '../../../types/BackEndErrors.interface';

@Injectable()
export class TakeFreeEffect {
  take$ = createEffect(() =>
    this.action$.pipe(
      ofType(takeBookAction),
      switchMap(({bookId}) => {
        return this.bookService.takeBook(bookId).pipe(
          map(() => {
            return takeBookSuccessAction();
          }),
          catchError((errors: BackEndErrors) => {
            return of(takeBookFailureAction({errors: errors}));
          })
        );
      })
    )
  );
  free$ = createEffect(() =>
    this.action$.pipe(
      ofType(freeBookAction),
      switchMap(({bookId}) => {
        return this.bookService.freeBook(bookId).pipe(
          map(() => {
            return freeBookSuccessAction();
          }),
          catchError((errors: BackEndErrors) => {
            return of(freeBookFailureAction({errors: errors}));
          })
        );
      })
    )
  );
  constructor(private action$: Actions, private bookService: BookService) {}
}

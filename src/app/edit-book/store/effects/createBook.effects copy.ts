import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { editBookAction, editBookFailureAction, editBookSuccessAction} from '../actions/editBook.actions';
import { BookService } from '../../../shared/services/book.service';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';
import { createBookAction, createBookFailureAction, createBookSuccessAction } from '../actions/createBook.actions copy';
import { Router } from '@angular/router';



@Injectable()
export class CreateBookEffect {
  createBooksAction$ = createEffect(() =>
    this.action$.pipe(
      ofType(createBookAction),
      switchMap(({ formData}) => {
        return this.bookService.createBook(formData).pipe(
          map(() => {
            return createBookSuccessAction();
          }),
          catchError((errors: BackEndErrors) => {
            return of(createBookFailureAction({errors: errors}));
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

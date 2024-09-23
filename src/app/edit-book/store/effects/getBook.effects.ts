import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { getEBookAction, getEBookFailureAction, getEBookSuccessAction } from '../actions/getBook.actions copy';
import { Book } from '../../../shared/books/types/booksResponce';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';
import { BookService } from '../../../shared/services/book.service';



@Injectable()
export class GetEBookEffect {
  getBooksAction$ = createEffect(() =>
    this.action$.pipe(
      ofType(getEBookAction),
      switchMap(({guid}) => {
        return this.bookService.getBook(guid).pipe(
          map((book: Book) => {
            return getEBookSuccessAction({ book });
          }),
          catchError((errors: BackEndErrors) => {
            return of(getEBookFailureAction({errors: errors}));
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

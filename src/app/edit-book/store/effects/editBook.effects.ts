import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { editBookAction, editBookFailureAction, editBookSuccessAction} from '../actions/editBook.actions';
import { BookService } from '../../../shared/services/book.service';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';



@Injectable()
export class EditBookEffect {
  editBooksAction$ = createEffect(() =>
    this.action$.pipe(
      ofType(editBookAction),
      switchMap(({guid, formData}) => {
        return this.bookService.editBook(guid, formData).pipe(
          map(() => {
            return editBookSuccessAction();
          }),
          catchError((errors: BackEndErrors) => {
            return of(editBookFailureAction({errors: errors}));
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

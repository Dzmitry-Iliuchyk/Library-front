import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { BackEndErrors } from '../../../types/BackEndErrors.interface';

import { BookService } from '../../../services/book.service';
import { Book } from '../../../books/types/booksResponce';
import { deleteBookAction, deleteBookFailureAction, deleteBookSuccessAction } from '../actions/deleteBook.action';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Injectable()
export class DeleteBookEffect {
  deleteBooksAction$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteBookAction),
      switchMap(({guid}) => {
        return this.bookService.deleteBook(guid).pipe(
          map((a:any) => {
            console.log("DeleteBookEffect", a)
            return deleteBookSuccessAction();
          }),
          catchError((errors: BackEndErrors) => {
            return of(deleteBookFailureAction({errors: errors}));
          })
        );
      })
    )
  );
  redirectAfterDelete$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteBookSuccessAction),
      tap(() => {
        const modal = document.getElementById('deleteModal');
        if (modal) {
          const bootstrapModal = bootstrap.Modal.getInstance(modal);
          bootstrapModal?.hide();
        }
        this.router.navigateByUrl('/');
      })
    ),
    {dispatch: false}
  );
  constructor(
    private action$: Actions,
    private bookService: BookService,
    private router: Router
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.actions';
import { CurrentUser } from '../../../shared/types/CurrentUser.interface';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';
import { AuthService } from '../../services/auth.service';
import { getCurrentUserAction } from '../actions/getCurrentUser.actions';


@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map(() => {
            return loginSuccessAction();
          }),
          catchError((errorResponse: BackEndErrors) => {
            return of(
              loginFailureAction({errors: errorResponse})
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/');
      }),
      map(() => getCurrentUserAction())
    )
  );

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}

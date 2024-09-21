import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, of, tap } from 'rxjs';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';
import { AuthService } from '../../services/auth.service';
import { getCurrentUserAction } from '../actions/getCurrentUser.actions';
import {
  loginByRefreshAction,
  loginByRefreshFailureAction,
  loginByRefreshSuccessAction,
} from '../actions/loginByRefreshAction';


@Injectable()
export class LoginByRefreshEffect {
  loginByRefresh$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginByRefreshAction),
      switchMap(() => {

        return this.authService.loginByRefresh().pipe(
          map(() => {
            return loginByRefreshSuccessAction();
          }),
          catchError(() => {
            return of(loginByRefreshFailureAction());
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginByRefreshSuccessAction),
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

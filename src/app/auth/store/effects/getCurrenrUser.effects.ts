import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.actions';
import { CurrentUser } from '../../../shared/types/CurrentUser.interface';
import { AuthService } from '../../services/auth.service';
import { JwtService } from '../../services/jwt.service';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUserAction$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUser) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError((a:any) => {
            console.error("GetCurrentUserEffect",a)
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private authService: AuthService,
  ) {}
}

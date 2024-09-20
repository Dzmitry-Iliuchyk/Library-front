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
        const guid = this.jwt.getUserId();
        if (guid == null) return of(getCurrentUserFailureAction());
        return this.authService.getCurrentUser(guid).pipe(
          map((currentUser: CurrentUser) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private jwt: JwtService
  ) {}
}

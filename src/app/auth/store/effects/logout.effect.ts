import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { logOutAction } from '../actions/logOut.action';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class LogOutEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  logOutEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logOutAction),
        tap(() => {
          this.authService.logout();
          this.router.navigateByUrl('/');
        })
      )
  );
}

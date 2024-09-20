import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { getCurrentUserAction } from '../actions/getCurrentUser.actions';


@Injectable()
export class RegisterEffect {
  constructor(private authService: AuthService,
     private actions$: Actions , 
     private router: Router) {
  }

  registerEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          tap(() => console.log('registerEffect')),
          map((a: any) => {
            console.log(a);
            return registerSuccessAction();
          }),
          catchError((backEndErrors: BackEndErrors) => {
            return of(registerFailureAction({ errors: backEndErrors }));
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/');
      }),
      map(() => getCurrentUserAction())
    )
  );
}
  


import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrentUser } from '../../shared/types/CurrentUser.interface';
import { CurrentUserSelector, isAdminSelector, IsAnonymousSelector, IsLoggedInSelector } from '../../auth/store/selectors';
import { logOutAction } from '../../auth/store/actions/logOut.action';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  currentUser$: Observable<CurrentUser | null>;

  constructor(private store: Store, private cookie: CookieService) {}
  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(IsLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(IsAnonymousSelector));
    this.isAdmin$ = this.store.pipe(select(isAdminSelector));
    this.currentUser$ = this.store.pipe(
      select(CurrentUserSelector)
    );
  }

  onClick():void{
    console.log("Logout")
    this.cookie.deleteAll();
    window.location.reload();
    }
}

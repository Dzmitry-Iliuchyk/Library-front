import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginByRefreshAction } from './auth/store/actions/loginByRefreshAction';
import { getCurrentUserAction } from './auth/store/actions/getCurrentUser.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    console.log('AppComponent');
    this.store.dispatch(getCurrentUserAction());
  }
}

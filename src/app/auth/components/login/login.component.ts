import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../types/loginRequest.interface';
import { select, Store } from '@ngrx/store';
import { loginAction } from '../../store/actions/login.actions';
import { Observable } from 'rxjs';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';
import { BackendErrorsSelector, isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackEndErrors | null>;


  constructor(private store: Store, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initializeValues();
    this.initializeForm();
  }
  onSubmit(): void {
    let request: LoginRequest = { ...this.form.value };
    this.store.dispatch(loginAction({ request }));
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(BackendErrorsSelector));
  }
  initializeForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../shared/types/AppState.interface';
import { RegisterRequest } from '../../types/registerRequest.interface';
import { registerAction } from '../../store/actions/register.action';
import { Observable } from 'rxjs';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';
import {
  BackendErrorsSelector,
  isSubmittingSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackEndErrors | null>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(BackendErrorsSelector));
  }
  initializeForm(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    const request: RegisterRequest = { ...this.form.value };
    console.log('Register Component', request);
    this.store.dispatch(registerAction({ request }));
  }
}

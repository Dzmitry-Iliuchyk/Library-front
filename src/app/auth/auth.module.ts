import { effect, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';
import { authReducer } from './store/reducer';
import { Actions, EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { LogOutEffect } from './store/effects/logout.effect';
import { LoginEffect } from './store/effects/login.effects';
import { GetCurrentUserEffect } from './store/effects/getCurrenrUser.effects';
import { LoginByRefreshEffect } from './store/effects/LoginByRefreshEffect';
import { HttpClientModule } from '@angular/common/http';
import { BackendErrorsModule } from "../shared/backend-errors/backend-errors.module";

const route: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService, JwtService],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([
        LoginEffect,
        GetCurrentUserEffect,
        LoginByRefreshEffect,
        LogOutEffect,
        RegisterEffect,
    ]),
    RouterModule.forChild(route),
    BackendErrorsModule
],
})
export class AuthModule {}

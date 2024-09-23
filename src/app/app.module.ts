import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarModule } from './top-bar/top-bar.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { Actions, EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RegisterEffect } from './auth/store/effects/register.effect';
import { BodyModule } from './body/body.module';
import { UserBooksModule } from './user-books/user-books.module';
import { BookModule } from './shared/book/book.module';
import { EditBookModule } from './edit-book/edit-book.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    AuthModule,
    BodyModule,
    UserBooksModule,
    BookModule,
    EditBookModule,
    StoreRouterConnectingModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

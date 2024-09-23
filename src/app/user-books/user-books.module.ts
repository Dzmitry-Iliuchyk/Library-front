import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBooksComponent } from './user-books/user-books.component';
import { RouterModule, Routes } from '@angular/router';
import { GlobalBooksModule } from '../global-books/global-books.module';

const routes: Routes = [
  {
    path: 'myBooks',
    component: UserBooksComponent,
  },
];


@NgModule({
  declarations: [
    UserBooksComponent
  ],
  imports: [
    CommonModule,
    GlobalBooksModule,
    RouterModule.forChild(routes)
  ]
})
export class UserBooksModule { }

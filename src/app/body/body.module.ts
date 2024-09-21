import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { GlobalBooksModule } from "../global-books/global-books.module";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
];


@NgModule({
  declarations: [
    BodyComponent
  ],
  exports: [BodyComponent],
  imports: [
    CommonModule,
    GlobalBooksModule,
    RouterModule.forChild(routes),
]
})
export class BodyModule { }

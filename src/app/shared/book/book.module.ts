import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';



@NgModule({
  declarations: [
    EditBookComponent,
    DetailsBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }

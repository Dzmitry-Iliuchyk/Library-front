import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeFreeBookComponent } from './components/take-free-book/take-free-book.component';
import { EffectsModule } from '@ngrx/effects';
import { TakeFreeEffect } from './store/effects/take-free.effect';
import { BookService } from '../services/book.service';

@NgModule({
  declarations: [TakeFreeBookComponent],
  imports: [CommonModule, EffectsModule.forFeature([TakeFreeEffect])],
  exports: [TakeFreeBookComponent],
  providers: [BookService],
})
export class TakeFreeBookModule {}

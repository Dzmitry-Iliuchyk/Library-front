import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  freeBookAction,
  takeBookAction,
} from '../../store/actions/take-free.action';

@Component({
  selector: 'take-free-book',
  templateUrl: './take-free-book.component.html',
  styleUrl: './take-free-book.component.scss',
})
export class TakeFreeBookComponent {
  @Input('isTaken') isTakenProps: boolean;
  @Input('bookId') bookIdProps: string;

  isTaken: boolean;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.isTaken = this.isTakenProps;
  }

  onClick(): void {
    if (this.isTaken) {
      this.store.dispatch(freeBookAction({ bookId: this.bookIdProps }));
    } else {
      this.store.dispatch(takeBookAction({ bookId: this.bookIdProps }));
    }
    this.isTaken = !this.isTaken;
  }
}

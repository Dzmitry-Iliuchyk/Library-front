import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../../books/types/booksResponce';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { BackEndErrors } from '../../../types/BackEndErrors.interface';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { bookSelector, errorsBookSelector, isLoadingBookSelector } from '../../store/selectors';
import { currentUserIdSelector, isAdminSelector, IsLoggedInSelector } from '../../../../auth/store/selectors';
import { getBookAction } from '../../store/actions/getBooks.actions';
import { deleteBookAction } from '../../store/actions/deleteBook.action';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrl: './details-book.component.scss'
})
export class DetailsBookComponent implements OnDestroy, OnInit {
  bookId: string = '';
  book: Book | null;
  bookSubscription: Subscription;
  isLoading$: Observable<Boolean>;
  isOwner$: Observable<Boolean>;
  error$: Observable<BackEndErrors | null>;
  IsAdmin$: Observable<boolean>
  isLoggedIn$: Observable<boolean>;


  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }
  initializeValues(): void {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    this.isLoading$ = this.store.pipe(select(isLoadingBookSelector));
    this.isLoggedIn$ = this.store.pipe(select(IsLoggedInSelector));
    this.error$ = this.store.pipe(select(errorsBookSelector));
    this.IsAdmin$ = this.store.pipe(select(isAdminSelector));
    this.isOwner$ = combineLatest([
      this.store.pipe(select(bookSelector)),
      this.store.pipe(select(currentUserIdSelector)),
    ]).pipe(
      map(([book, currentUserId]: [Book | null, string | null]) => {
        if (!book || !currentUserId) {
          return false;
        } else if (book.clientId === currentUserId) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
  initializeListeners(): void {
    this.bookSubscription = this.store
      .pipe(select(bookSelector))
      .subscribe((book: Book | null) => {
        this.book = book;
      });
  }

  deleteBook(): void {
    this.store.dispatch(deleteBookAction({ guid: this.bookId }));
  }

  fetchData(): void {
    this.store.dispatch(getBookAction({ guid: this.bookId }));
  }
}


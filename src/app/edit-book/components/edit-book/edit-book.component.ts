import { Component } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { BookInput } from '../../../shared/types/BookInput.interface';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import {
  editBookSelector,
  errorsEditBookSelector,
  isLoadingEditBookSelector,
  isSubmittingEditBookSelector,
} from '../../store/selectors';
import { getEBookAction } from '../../store/actions/getBook.actions copy';
import { editBookAction } from '../../store/actions/editBook.actions';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss',
})
export class EditBookComponent {
  initialValues$: Observable<BookInput | null>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backEndErrors$: Observable<BackEndErrors | null>;
  bookId: string;
  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    console.log('ngOnInit Editbook');
  }
  initializeValues(): void {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingEditBookSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingEditBookSelector));
    this.backEndErrors$ = this.store.pipe(select(errorsEditBookSelector));
    this.initialValues$ = this.store.pipe(
      select(editBookSelector),
      filter(Boolean),
      map((book) => {
        return {
          title: book.title,
          isbn: book.isbn,
          genre: book.genre,
          description: book.description,
          authorId: book.authorId,
          image: null,
        };
      }),
      tap((book) => console.log(book))
    );
  }
  fetchData(): void {
    if (this.bookId) {
      console.log(this.bookId);
      this.store.dispatch(getEBookAction({ guid: this.bookId }));
    }
    console.log(this.bookId);
  }
  onSubmit(formData: FormData|null ) {
    this.store.dispatch(
      editBookAction({
        guid: this.bookId,
        formData: formData,
      })
    );
  }
}

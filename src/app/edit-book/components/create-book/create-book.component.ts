import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BackEndErrors } from '../../../shared/types/BackEndErrors.interface';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import {
  errorsCreateBookSelector,
  isLoadingCreateBookSelector,
  isSubmittingCreateBookSelector,
} from '../../store/createBookFeatureSelector';
import { BookInput } from '../../../shared/types/BookInput.interface';
import { createBookAction } from '../../store/actions/createBook.actions copy';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss',
})
export class CreateBookComponent {
  initialValues: BookInput = {
    authorId: '',
    genre: '',
    isbn: '',
    title: '',
    description: '',

  };
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backEndErrors$: Observable<BackEndErrors | null>;
  bookId: string;
  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.initializeValues();
  }
  initializeValues(): void {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingCreateBookSelector)
    );
    this.isLoading$ = this.store.pipe(select(isLoadingCreateBookSelector));
    this.backEndErrors$ = this.store.pipe(select(errorsCreateBookSelector));
  }

  onSubmit(
    formData: FormData|null
) {
    this.store.dispatch(createBookAction({formData: formData}));
  }
}

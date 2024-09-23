import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Book, BooksResponse } from '../../types/booksResponce';
import { BooksRequest } from '../../types/BooksRequest.intrface';
import { BackEndErrors} from '../../../types/BackEndErrors.interface';
import {
  booksCountSelector,
  booksSelector,
  errorsSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { getBooksAction } from '../../store/actions/getBooks.actions';
import { currentUserIdSelector, IsLoggedInSelector } from '../../../../auth/store/selectors';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'lib-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit, OnChanges, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;
  @Input('titleFilter') titleFilterProps: string;
  @Input('authorFilter') authorFilterProps: string;
  
  currentUserId$: Observable<string>;
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  error$: Observable<BackEndErrors | null>;
  booksData$: Observable<Book[] | null>;
  count$: Observable<number|null>
  limit = environment.limit;
  baseUrl: string;
  currentPage: number;
  queryParamsSubscribtion: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}
  ngOnDestroy(): void {
    this.queryParamsSubscribtion.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    let isChanged = false;
    if (changes['titleFilterProps']&& !changes['titleFilterProps'].isFirstChange()) {
      isChanged = true;
      this.onFiltersChanged();
      console.log(
        'titleFilterProps изменился на:',
        changes['titleFilterProps'].currentValue
      );
    }
    if (changes['authorFilterProps']&& !changes['authorFilterProps'].isFirstChange()) {
      isChanged = true;
      this.onFiltersChanged();
      console.log(
        'authorFilterProps изменился на:',
        changes['authorFilterProps'].currentValue
      );
    }
    if (changes['apiUrlProps'] && !changes['apiUrlProps'].isFirstChange()) {
      const isApiChanged =
        changes['apiUrlProps'].currentValue !==
        changes['apiUrlProps'].previousValue;
      if (isApiChanged) {
        isChanged = true;
      }
    }
    if(isChanged){
      console.log("OnChanges", changes)
      this.fetchBooks();
    }
  }
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  private fetchBooks() {
    const skip = this.currentPage * this.limit - this.limit;
    const request = {
      skip: skip,
      take: this.limit,
      authorFilter: this.authorFilterProps,
      titleFilter: this.titleFilterProps,
    };
    console.log('fetchBook', request, this.apiUrlProps);
    this.store.dispatch(
      getBooksAction({ url: this.apiUrlProps, request: request })
    );
  }
  initializeListeners() {
    this.queryParamsSubscribtion = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchBooks();
      }
    );
  }
  initializeValues() {
    this.currentUserId$ = this.store.pipe(select(currentUserIdSelector), tap(()=>console.log));
    this.count$ = this.store.pipe(select(booksCountSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isLoggedIn$ = this.store.pipe(select(IsLoggedInSelector));
    this.error$ = this.store.pipe(select(errorsSelector));
    this.booksData$ = this.store.pipe(select(booksSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }
  getImage(base64stringImage: any): string {
     return this.bookService.getImage(base64stringImage);
  }
  onFiltersChanged(){
    this.currentPage = 1;
    this.router.navigate(['/']);
  }
}

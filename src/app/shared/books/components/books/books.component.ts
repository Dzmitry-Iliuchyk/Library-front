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
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { BooksResponse } from '../../types/booksResponce';
import { BooksRequest } from '../../types/BooksRequest.intrface';
import { BackEndErrors } from '../../../types/BackEndErrors.interface';
import {
  booksSelector,
  errorsSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { getBooksAction } from '../../store/actions/getBooks.actions';

@Component({
  selector: 'lib-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit, OnChanges, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;
  @Input('titleFilter') titleFilterProps: string;
  @Input('authorFilter') authorFilterProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<BackEndErrors | null>;
  booksData$: Observable<BooksResponse | null>;
  limit = environment.limit;
  baseUrl: string;
  currentPage: number;
  queryParamsSubscribtion: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.queryParamsSubscribtion.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    const isChanged =
      changes['apiUrlProps'].currentValue !==
      changes['apiUrlProps'].previousValue;
    const isFirstChange = changes['apiUrlProps'].isFirstChange();
    if (isChanged && !isFirstChange) {
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
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorsSelector));
    this.booksData$ = this.store.pipe(select(booksSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }
  getImage(byteArray: Uint8Array): string {
    return 'data:image/png;base64,' + this.byteArrayToBase64(byteArray);
  }

  byteArrayToBase64(byteArray: Uint8Array): string {
    let binary = '';
    const len = byteArray.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(byteArray[i]);
    }
    return window.btoa(binary);
  }
}

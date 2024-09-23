import { AuthState } from '../../auth/types/authState.interface';
import { BookDetailsState } from '../book/store/types/BookDetailsState.interface';
import { BooksState } from '../books/types/BooksState.interface';

export interface AppState {
  auth: AuthState;
  books: BooksState;
  book: BookDetailsState;
}

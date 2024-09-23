import { AuthState } from '../../auth/types/authState.interface';
import { CreateBookState } from '../../edit-book/types/CreateBookState';
import { EditBookState } from '../../edit-book/types/EditBookState.interface';
import { BookDetailsState } from '../book/store/types/BookDetailsState.interface';
import { BooksState } from '../books/types/BooksState.interface';

export interface AppState {
  auth: AuthState;
  books: BooksState;
  book: BookDetailsState;
  editBook: EditBookState;
  createBook: CreateBookState;
}

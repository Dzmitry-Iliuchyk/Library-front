import { AuthState } from '../../auth/types/authState.interface';
import { BooksState } from '../books/types/BooksState.interface';

export interface AppState {
  auth: AuthState;
  books: BooksState;
}

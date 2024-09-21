import { BackEndErrors } from '../../types/BackEndErrors.interface';
import { Book, BooksResponse } from './booksResponce';

export interface BooksState {
  books: Book[] | null;
  count: number | null;
  isLoading: boolean;
  errors: BackEndErrors | null;
}

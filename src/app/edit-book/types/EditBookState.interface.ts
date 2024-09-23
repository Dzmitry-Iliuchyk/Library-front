import { Book } from '../../shared/books/types/booksResponce';
import { BackEndErrors } from '../../shared/types/BackEndErrors.interface';

export interface EditBookState {
    book: Book | null;
    errors: BackEndErrors | null;
    isLoading: boolean;
    isSubmitting: boolean;
  }


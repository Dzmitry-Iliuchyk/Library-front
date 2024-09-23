import { Book } from "../../../books/types/booksResponce";
import { BackEndErrors } from "../../../types/BackEndErrors.interface";

export interface BookDetailsState{
    book: Book | null;
    isLoading: boolean;
    errors: BackEndErrors | null;
}
import { BackEndErrors } from "../../shared/types/BackEndErrors.interface";


export interface CreateBookState {
    errors: BackEndErrors | null;
    isLoading: boolean;
    isSubmitting: boolean;
}

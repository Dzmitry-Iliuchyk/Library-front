import { BackEndErrors} from "../../shared/types/BackEndErrors.interface";
import { CurrentUser } from "../../shared/types/CurrentUser.interface";

export interface AuthState {
  isSubmitting: boolean;
  currentUser: CurrentUser | null;
  isLoggedIn: boolean | null;
  isLoading: boolean;
  isAdmin: boolean;
  validationErrors: BackEndErrors | null;
}

import { createSelector } from "@ngrx/store";
import { EditBookState } from "../types/EditBookState.interface";
import { AppState } from "../../shared/types/AppState.interface";



export const editBookFeatureSelector = (state: AppState): EditBookState => state.editBook;



export const errorsEditBookSelector = createSelector(
  editBookFeatureSelector,
  (booksState: EditBookState) => booksState.errors
);

export const editBookSelector = createSelector(
  editBookFeatureSelector,
  (booksState: EditBookState)=> booksState.book
);

export const isLoadingEditBookSelector = createSelector(
  editBookFeatureSelector,
  (booksState: EditBookState)=> booksState.isLoading
);


export const isSubmittingEditBookSelector = createSelector(
  editBookFeatureSelector,
  (booksState: EditBookState)=> booksState.isSubmitting
);




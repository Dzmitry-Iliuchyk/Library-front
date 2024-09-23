import { createSelector } from "@ngrx/store";
import { AppState } from "../../shared/types/AppState.interface";
import { CreateBookState } from "../types/CreateBookState";
import { editBookFeatureSelector } from "./selectors";



export const createBookFeatureSelector = (state: AppState): CreateBookState => state.createBook;
export const errorsCreateBookSelector = createSelector(
  editBookFeatureSelector,
  (booksState: CreateBookState) => booksState.errors
);


export const isLoadingCreateBookSelector = createSelector(
  editBookFeatureSelector,
  (booksState: CreateBookState) => booksState.isLoading
);


export const isSubmittingCreateBookSelector = createSelector(
  editBookFeatureSelector,
  (booksState: CreateBookState) => booksState.isSubmitting
);

import { createSelector } from "@ngrx/store";

import { BooksState } from "../types/BooksState.interface";
import { AppState } from "../../types/AppState.interface";

export const booksFeatureSelector = (state: AppState): BooksState => state.books;



export const errorsSelector = createSelector(
  booksFeatureSelector,
  (booksState: BooksState) => booksState.errors
);

export const booksSelector = createSelector(
  booksFeatureSelector,
  (booksState: BooksState)=> booksState.books
);

export const isLoadingSelector = createSelector(
  booksFeatureSelector,
  (booksState: BooksState)=> booksState.isLoading
);

export const booksCountSelector = createSelector(
  booksFeatureSelector,
  (booksState: BooksState)=> booksState.count
);


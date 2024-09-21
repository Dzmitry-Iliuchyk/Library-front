import { createSelector } from "@ngrx/store";

import { BooksState } from "../types/BooksState.interface";
import { AppState } from "../../types/AppState.interface";

export const bookFeatureSelector = (state: AppState): BooksState => state.books;



export const errorsSelector = createSelector(
  bookFeatureSelector,
  (booksState: BooksState) => booksState.errors
);

export const booksSelector = createSelector(
  bookFeatureSelector,
  (booksState: BooksState)=> booksState.books
);

export const isLoadingSelector = createSelector(
  bookFeatureSelector,
  (booksState: BooksState)=> booksState.isLoading
);

export const booksCountSelector = createSelector(
  bookFeatureSelector,
  (booksState: BooksState)=> booksState.count
);


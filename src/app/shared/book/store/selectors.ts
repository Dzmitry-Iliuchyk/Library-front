import { createSelector } from "@ngrx/store";

import { AppState } from "../../types/AppState.interface";
import { BookDetailsState } from "./types/BookDetailsState.interface";

export const bookFeatureSelector = (state: AppState): BookDetailsState => state.book;



export const errorsBookSelector = createSelector(
  bookFeatureSelector,
  (booksState: BookDetailsState) => booksState.errors
);

export const bookSelector = createSelector(
  bookFeatureSelector,
  (booksState: BookDetailsState)=> booksState.book
);

export const isLoadingBookSelector = createSelector(
  bookFeatureSelector,
  (booksState: BookDetailsState)=> booksState.isLoading
);



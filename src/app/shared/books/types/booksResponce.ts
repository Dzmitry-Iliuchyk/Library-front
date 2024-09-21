export interface BooksResponse {
  books: Book[];
  count: number;
}
export interface Book {
  id: string;
  isbn: string;
  title: string;
  genre: string;
  description: string;
  authorId: string;
  firstName: string;
  lastName: string;
  image: Uint8Array;
  isTaken: boolean;
}

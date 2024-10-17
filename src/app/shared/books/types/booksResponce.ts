export interface BooksResponse {
  books: Book[];
  total: number;
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
  clientId: string;
  username: string;
}

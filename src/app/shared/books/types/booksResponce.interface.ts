export interface BooksResponse {
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

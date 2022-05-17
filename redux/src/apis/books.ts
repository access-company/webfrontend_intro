import { Book, BookCreateRequest } from "../models/Book";

const books = [
  {
    id: 1,
    title: '吾輩は猫である',
    authorId: 1,
  },
  {
    id: 2,
    title: '学問のすゝめ',
    authorId: 2,
  },
  {
    id: 3,
    title: '銀河鉄道の夜',
    authorId: 3,
  },
];

export function fetchBooks() {
  return new Promise<{ data: Book[] }>((resolve) =>
    setTimeout(() => resolve({ data: books }), 500)
  );
}

export function createBook(title: string, authorId: number) {
  return new Promise<{ data: BookCreateRequest }>((resolve) =>
    setTimeout(() => resolve({ data: { title, authorId } }), 500)
  );
}

import { Author, AuthorCreateRequest } from "../models/Author";

const authors = [
  {
    id: 1,
    firstName: '漱石',
    lastName: '夏目',
  },
  {
    id: 2,
    firstName: '諭吉',
    lastName: '福澤',
  },
  {
    id: 3,
    firstName: '賢治',
    lastName: '宮沢',
  },
];

export function fetchAuthors() {
  return new Promise<{ data: Author[] }>((resolve) =>
    setTimeout(() => resolve({ data: authors }), 500)
  );
}

export function createAuthor(firstName: string, lastName: string) {
  return new Promise<{ data: AuthorCreateRequest }>((resolve) =>
    setTimeout(() => resolve({ data: { firstName, lastName } }), 500)
  );
}

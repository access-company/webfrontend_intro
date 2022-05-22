export interface Book {
  id: number
  title: string
  authorId: number
};

export interface BookCreateRequest {
  title: string
  authorId: number
};

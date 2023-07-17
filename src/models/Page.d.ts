export interface Page<T> {
  content: List<T>
  totalPages: number
  numberOfElements: number
  totalElements: number
}

export class Pageable {
  page: number;
  size: number;
}

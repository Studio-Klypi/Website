export interface ApiListResponse<T> {
  data: T[];
  meta: {
    total: number;
    count: number;
  };
}

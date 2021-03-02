export interface CrudeRepo<T> {
  get(id: number): T;
  getAll(): Array<T>;
  update(subject: T): void;
  delete(id: number): void;
  add(subject: T): void;
}

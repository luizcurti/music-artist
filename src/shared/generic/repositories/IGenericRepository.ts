import { FindManyOptions } from 'typeorm';

interface IGenericRepository<T> {
  create(data: Record<string, unknown>): Promise<T>;
  findByID(id: T, relations?: string[]): Promise<T>;
  findByIds(ids: number[], relations?: string[], order?: object): Promise<T[]>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  countAll(): Promise<number>;
  update(obj: T): Promise<T>;
  remove(obj: T): Promise<void>;
}

export { IGenericRepository };

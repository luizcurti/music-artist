import { FindManyOptions } from 'typeorm';

interface IGenericRepository<T> {
  create(data: Record<string, unknown>): Promise<T>;
  findByID(id: string, relations?: string[]): Promise<T>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  update(obj: T): Promise<T>;
  remove(obj: T): Promise<void>;
}

export { IGenericRepository };

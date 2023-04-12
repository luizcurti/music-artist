import {
  EntityTarget,
  FindManyOptions,
  FindOneOptions,
  getRepository,
  Repository,
} from 'typeorm';

import { IGenericRepository } from '@shared/generic/repositories/IGenericRepository';

class GenericRepository<T> implements IGenericRepository<T> {
  private repository: Repository<T>;

  constructor(entity: EntityTarget<T>, connectionName: string) {
    this.repository = getRepository(entity, connectionName);
  }

  async create(data: object): Promise<T> {
    const el = this.repository.create(data);
    await this.repository.save(el);

    return el;
  }

  async findByID(id: T, relations: string[] = []): Promise<T> {
    return this.repository.findOne({
      where: { id },
      relations,
    });
  }

  async findByIds(
    ids: number[],
    relations: string[] = [],
    order: object = { id: 'ASC' }
  ): Promise<T[]> {
    return this.repository.findByIds(ids, {
      relations,
      order,
    });
  }

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async countAll(): Promise<number> {
    return this.repository.count();
  }

  async countByFilter(options?: FindManyOptions<T>): Promise<number> {
    return this.repository.count(options);
  }

  async update(el: T): Promise<T> {
    return this.repository.save(el);
  }

  async remove(el: T): Promise<void> {
    this.repository.remove(el);
  }
}

export { GenericRepository };

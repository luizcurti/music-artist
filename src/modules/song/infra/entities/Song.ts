import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
class Song extends Model {
  
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @Column
  artist: string;

  @Column
  imageurl: string;

  @Column
  notes: string;

  @Column
  popularity: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;
}

export { Song }
import { Table, Column, Model } from 'sequelize-typescript';

@Table
class Song extends Model {
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

  @Column
  creationDate: Date;

  @Column
  updatedOn: Date;
}

export { Song }
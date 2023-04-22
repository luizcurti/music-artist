import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import config from '@config/index';

const { music } = config.database.names;

@Entity({ database: music, name: 'songs' })
class Song {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column()
  imageurl: string;

  @Column()
  notes: string;

  @Column()
  popularity: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Song };

import { ISongRepository } from '@modules/song/repositories/ISongRepository';
import { GenericRepository } from '@shared/generic/infra/typeorm/repositories/GenericRepository';

import { Song } from '../entities/Song';
import config from '@config/index';

const { music } = config.database.names;

class SongRepository
  extends GenericRepository<Song>
  implements ISongRepository
{
  constructor() {
    super(Song, music);
  }
}

export { SongRepository };

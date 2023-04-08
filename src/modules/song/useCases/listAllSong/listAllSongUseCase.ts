import { RedisCache } from '../../../../shared/infra/redis';
import { Song } from '../../infra/entities/Song';

class ListAllSongUseCase {
  async execute() {
    return await Song.findAll();
  }
}

export { ListAllSongUseCase };

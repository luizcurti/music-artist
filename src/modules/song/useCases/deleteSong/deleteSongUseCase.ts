import { RedisCache } from '../../../../shared/infra/redis';
import { Song } from '../../infra/entities/Song';

const redisCache = new RedisCache();

interface IRequest {
  id: string;
}

class DeleteSongUseCase {
  async execute({id}: IRequest) {
    const song = await Song.findByPk(id);

    if (!song) 
      throw new Error('Song does not exist');

    await song.destroy();
    redisCache.del(id);

    return "Deleted";
  }
}

export { DeleteSongUseCase };

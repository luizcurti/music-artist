import { RedisCache } from '../../../../shared/infra/redis';
import { Song } from '../../infra/entities/Song';

const redisCache = new RedisCache();

interface IRequest {
  id: string;
}

class ListSongByIdUseCase {
  async execute({id}: IRequest) {
    let song = await redisCache.get(id);

    if (!song) 
      song = await Song.findByPk(id);
  
    if (!song) 
      throw new Error('Song does not exist');

    return song;
  }
}

export { ListSongByIdUseCase };

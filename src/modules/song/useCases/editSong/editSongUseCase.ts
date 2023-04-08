import { RedisCache } from '../../../../shared/infra/redis';
import { Song } from '../../infra/entities/Song';

const redisCache = new RedisCache();

interface IRequest {
  id: string;
  name: string;
  artist: string;
  imageurl: string;
  notes: string;
  popularity: string
}

class EditSongUseCase {
  async execute({id, name, artist, imageurl, notes, popularity}: IRequest) {
    const song = await Song.findByPk(id);

    if (!song) 
      throw new Error('Song does not exist');

    const songUpdated = await song.update({id, name, artist, imageurl, notes, popularity});

    if (songUpdated) {
      redisCache.del(id);
      redisCache.add(id, JSON.stringify([{
        name, artist, imageurl, notes, popularity,
      }]));
    }

    return songUpdated;
  }
}

export { EditSongUseCase };

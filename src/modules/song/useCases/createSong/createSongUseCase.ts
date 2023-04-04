import { RedisCache } from '../../../../shared/infra/redis';
import { Song } from '../../infra/entities/Song';

const redisCache = new RedisCache();

interface IRequest {
  name: string;
  artist: string;
  imageurl: string;
  notes: string;
  popularity: string
}

class CreateSongUseCase {
  async execute({name, artist, imageurl, notes, popularity}: IRequest) {

    const song = await Song.create({name, artist, imageurl, notes, popularity});

    if (song.id) 
      await redisCache.add(song.id, JSON.stringify([{ song }]), );

    return song;
  }
}

export { CreateSongUseCase };

import { Song } from '@modules/song/infra/entities/Song';
import  cache from '@shared/infra/redis';
import { v4 as uuidv4 } from 'uuid';

interface IRequest {
  name: string;
  artist: string;
  imageurl: string;
  notes: string;
  popularity: string
}

class CreateSongUseCase {
  async execute({name, artist, imageurl, notes, popularity}: IRequest) {
    const id = uuidv4();

    const song = await Song.create({id, name, artist, imageurl, notes, popularity});

    if (song.id) 
      await cache.add(song.id, song);

    return song;
  }
}

export { CreateSongUseCase };

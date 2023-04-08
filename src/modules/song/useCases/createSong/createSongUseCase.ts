import { inject, injectable } from 'tsyringe';
import { ISongRepository } from '@modules/song/repositories/ISongRepository';
import  cache from '@shared/infra/redis';
import { v4 as uuidv4 } from 'uuid';

interface IRequest {
  name: string;
  artist: string;
  imageurl: string;
  notes: string;
  popularity: string
}

@injectable()
class CreateSongUseCase {
  constructor(
    @inject('SongRepository')
    private songRepository: ISongRepository
  ) {}

  async execute({name, artist, imageurl, notes, popularity}: IRequest) {
    const id = uuidv4();
    
    const song = await this.songRepository.create({id, name, artist, imageurl, notes, popularity});

    if (song.id) 
      await cache.add(song.id, song);

    return song;
  }
}

export { CreateSongUseCase };

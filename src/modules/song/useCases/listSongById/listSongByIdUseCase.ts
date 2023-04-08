import { AppError } from '@errors/appError';
import { ISongRepository } from '@modules/song/repositories/ISongRepository';
import { inject, injectable } from 'tsyringe';
import  cache from '@shared/infra/redis';

@injectable()
class ListSongByIdUseCase {
  constructor(
    @inject('SongRepository')
    private songRepository: ISongRepository
  ) {}

  async execute({id}) {
    let song;

    song = await cache.get(id);

    if (song) 
      song = JSON.parse(song)

      if (!song) 
      song = await this.songRepository.findByID(id);
  
    if (!song) 
      throw new AppError('Song does not exist', 404, 'Not Found');

    return song;
  }
}

export { ListSongByIdUseCase };

import { AppError } from '@errors/appError';
import  cache from '@shared/infra/redis';
import { Song } from '@modules/song/infra/entities/Song';

interface IRequest {
  id: string;
}

class ListSongByIdUseCase {
  async execute({id}: IRequest) {
    let song = await cache.get(id);

    if (song) 
      song = JSON.parse(song)

    if (!song) 
      song = await Song.findByPk(id);
  
    if (!song) 
      throw new AppError('Song does not exist', 404, 'Not Found');

    return song;
  }
}

export { ListSongByIdUseCase };

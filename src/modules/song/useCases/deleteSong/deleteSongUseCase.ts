import  cache from '@shared/infra/redis';
import { Song } from '@modules/song/infra/entities/Song';
import { AppError } from '@errors/appError';

interface IRequest {
  id: string;
}

class DeleteSongUseCase {
  async execute({id}: IRequest) {
    const song = await Song.findByPk(id);

    if (!song) 
      throw new AppError('Song does not exist', 404, 'Not Found');

    await song.destroy();
    await cache.del(id);

    return "Deleted";
  }
}

export { DeleteSongUseCase };

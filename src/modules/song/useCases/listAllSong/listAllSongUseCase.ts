import { Song } from '@modules/song/infra/entities/Song';

class ListAllSongUseCase {
  async execute() {
    return await Song.findAll();
  }
}

export { ListAllSongUseCase };

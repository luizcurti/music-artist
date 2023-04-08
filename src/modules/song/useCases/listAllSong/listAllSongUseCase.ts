import { ISongRepository } from '@modules/song/repositories/ISongRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListAllSongUseCase {
  constructor(
    @inject('SongRepository')
    private songRepository: ISongRepository
  ) {}

  async execute() {
    return await this.songRepository.findAll();
  }
}

export { ListAllSongUseCase };

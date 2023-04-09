import  cache from '@shared/infra/redis';
import { Song } from '@modules/song/infra/entities/Song';
import { AppError } from '@errors/appError';

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
      throw new AppError('Song does not exist', 404, 'Not Found');

    song.name = name;
    song.artist = artist;
    song.imageurl = imageurl;
    song.notes = notes;
    song.popularity = popularity;

    const songUpdated = await Song.update(  
      { name: name, artist: artist, imageurl: imageurl, notes: notes, popularity: popularity },
      { where: { id: id } }
    );

    if (songUpdated) {
      await cache.del(id);
      await cache.add(song.id, songUpdated);
    }

    return songUpdated;
  }
}

export { EditSongUseCase };

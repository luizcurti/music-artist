import { container } from 'tsyringe';
import { CreateSongUseCase } from './createSongUseCase';
import { Request, Response } from 'express';

class CreateSongController {
  async handle(request: Request, response: Response) {
    const { name, artist, imageurl, notes, popularity } = request.body;

    const createSongUseCase = container.resolve(CreateSongUseCase);

    await createSongUseCase.execute({
      name, 
      artist, 
      imageurl, 
      notes, 
      popularity
    });
    return response.status(200).json({ message: 'Song created successfully' });
  }
}

export { CreateSongController };

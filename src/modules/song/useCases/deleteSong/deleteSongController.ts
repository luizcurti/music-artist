import { container } from 'tsyringe';
import { DeleteSongUseCase } from './deleteSongUseCase';
import { Request, Response } from 'express';

class DeleteSongController {
  async handle(request: Request, response: Response) {
    const deleteSongUseCase = container.resolve(DeleteSongUseCase);
    const { id } = request.params;

    await deleteSongUseCase.execute({
      id
    });
    return response.status(200).json({ message: 'Song deleted successfully' });
  }
}

export { DeleteSongController };

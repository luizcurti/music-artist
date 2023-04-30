import "reflect-metadata";
import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { EditSongUseCase } from "@modules/song/useCases/editSong/editSongUseCase";
import { EditSongController } from "@modules/song/useCases/editSong/editSongController";

jest.mock('tsyringe');
jest.mock('@modules/song/useCases/editSong/editSongUseCase', () => {
  return {
    EditSongUseCase: jest.fn().mockImplementation(() => {
      return {
        execute: jest.fn()
      }
    })
  }
});

describe('EditSongController', () => {
    let editSongController: EditSongController;
    let editSongUseCase: EditSongUseCase;
    let request: Request;
    let response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;

    beforeEach(() => {
        request = {} as Request;
        editSongController = new EditSongController();
    
        editSongUseCase = {
          execute: jest.fn(),
        } as unknown as jest.Mocked<EditSongUseCase>;
    });
    
    afterEach(() => {
        jest.clearAllMocks();
    });    

    it('should update a song successfully', async () => {
        const id = String(uuidv4());    

        const song = {
            id: id,
            name: 'Song Name',
            artist: 'Song Artist',
            imageurl: 'https://example.com/song-image.jpg',
            notes: 'Song Notes',
            popularity: '10',
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
        };

        jest.spyOn(container, 'resolve').mockReturnValue(editSongUseCase);
        jest.spyOn(editSongUseCase, 'execute').mockReturnValue(Promise.resolve(song));

        const requestMock = {
            params: { id: id },
            body: {
            name: 'Nova música',
            artist: 'Novo artista',
            imageurl: 'nova-imagem.jpg',
            notes: 'Novas notas',
            popularity: '5'
            },
        } as unknown as Request; 

        const editSongController = new EditSongController();

        await editSongController.handle(requestMock, response);

        expect(editSongUseCase.execute).toHaveBeenCalledWith({
            id: id,
            name: 'Nova música',
            artist: 'Novo artista',
            imageurl: 'nova-imagem.jpg',
            notes: 'Novas notas',
            popularity: "5",
        });

        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledWith({ message: 'Song updated successfully' });
    });
});

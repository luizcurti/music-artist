import "reflect-metadata";
import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListAllSongController } from '@modules/song/useCases/listAllSong/listAllSongController';
import { ListAllSongUseCase } from '@modules/song/useCases/listAllSong/listAllSongUseCase';
import { v4 as uuidv4 } from 'uuid';

jest.mock('tsyringe');
jest.mock('@modules/song/useCases/listAllSong/listAllSongUseCase');

describe('ListAllSongController', () => {
  let listAllSongController: ListAllSongController;
  let listAllSongUseCase: jest.Mocked<ListAllSongUseCase>;
  let request: Request;
  let response: Response;

  var songs = [
    {
      id: String(uuidv4()),
      name: 'Song Name',
      artist: 'Song Artist',
      imageurl: 'https://example.com/song-image.jpg',
      notes: 'Song Notes',
      popularity: '10',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: String(uuidv4()),
      name: 'Song Name 2',
      artist: 'Song Artist 2',
      imageurl: 'https://example.com/song-image2.jpg',
      notes: 'Song Notes 2',
      popularity: '7',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ];

  beforeEach(() => {
    request = {} as Request;
    response = {} as Response;
    listAllSongUseCase = {} as ListAllSongUseCase & jest.Mocked<ListAllSongUseCase>;
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should list all songs successfully', async () => {
    response.status = jest.fn().mockReturnThis();
    response.json = jest.fn().mockReturnValue(response);
  
    jest.spyOn(container, 'resolve').mockReturnValue(listAllSongUseCase);
    jest.spyOn(listAllSongUseCase, 'execute').mockReturnValue(Promise.resolve(songs));
   
    await listAllSongController.handle(request, response);
  
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith(songs);
  });
});

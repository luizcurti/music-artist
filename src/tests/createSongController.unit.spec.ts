import "reflect-metadata";
import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { AppError } from '@errors/appError';
import * as Yup from 'yup';
import { CreateSongUseCase } from "@modules/song/useCases/createSong/createSongUseCase";
import { CreateSongController } from "@modules/song/useCases/createSong/createSongController";

jest.mock('tsyringe');
jest.mock('@modules/song/useCases/createSong/CreateSongUseCase', () => {
  return {
    CreateSongUseCase: jest.fn().mockImplementation(() => {
      return {
        execute: jest.fn()
      }
    })
  }
});

describe('CreateSongController', () => {
  let createSongController: CreateSongController;
  let createSongUseCase: CreateSongUseCase;
  let request: Request;
  let response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  } as unknown as Response;

  var song = {
    id: expect.any(String),
    name: 'Song Name',
    artist: 'Song Artist',
    imageurl: 'https://example.com/song-image.jpg',
    notes: 'Song Notes',
    popularity: '10',
    created_at: expect.any(Date),
    updated_at: expect.any(Date),
  };

  beforeEach(() => {
      request = {} as Request;
      createSongController = new CreateSongController();

      createSongUseCase = {
        execute: jest.fn(),
      } as unknown as jest.Mocked<CreateSongUseCase>;
  });

  afterEach(() => {
      jest.clearAllMocks();
  });

  it('Should be created a song with successful', async () => {
    const request = {
      body: {
        name: 'Song Name',
        artist: 'Song Artist',
        imageurl: 'https://example.com/song-image.jpg',
        notes: 'Song Notes',
        popularity: '10',
      },
    };

    const schemaMock = {
      required: jest.fn().mockReturnThis(),
      string: jest.fn().mockReturnThis(),
      validate: jest.fn().mockReturnValue(true),
    };

    jest.spyOn(Yup, 'object').mockReturnValue(schemaMock as any);

    jest.spyOn(container, 'resolve').mockReturnValue(createSongUseCase);
    jest.spyOn(createSongUseCase, 'execute').mockReturnValue(Promise.resolve(song));

    await createSongController.handle(request as Request, response as Response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({ message: 'Song created successfully' });
  });

  it('should throw a validation error when creating a song with invalid data', async () => {
    const request = {
      body: {
        name: '',
        artist: 'Novo artista',
        imageurl: 'nova-imagem.jpg',
        notes: 'Notas da música',
        popularity: 5,
      },
    };

    const schemaMock = {
      required: jest.fn().mockReturnThis(),
      string: jest.fn().mockReturnThis(),
      validate: jest.fn().mockReturnValue(false),
    };

    jest.spyOn(Yup, 'object').mockReturnValue(schemaMock as any);

    await expect(createSongController.handle(request as Request, response as Response)).rejects.toEqual(
      new AppError('Validations failed', 400, 'VALIDATIONS_FAILED')
    );

    expect(response.status).not.toHaveBeenCalled();
    expect(response.json).not.toHaveBeenCalled();
  });
});

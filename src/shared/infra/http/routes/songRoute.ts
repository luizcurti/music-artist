import { Router } from 'express';

import { CreateSongController } from '../../../../modules/song/useCases/createSong/createSongController';
import { DeleteSongController } from '../../../../modules/song/useCases/deleteSong/deleteSongController';
import { EditSongController } from '../../../../modules/song/useCases/editSong/editSongController';
import { ListAllSongController } from '../../../../modules/song/useCases/listAllSong/listAllSongController';
import { ListSongByIdController } from '../../../../modules/song/useCases/listSongById/listSongByIdController';

const router = Router();

const listAllSongController = new ListAllSongController();
const listSongByIdController = new ListSongByIdController();
const createSongController = new CreateSongController();
const editSongController = new EditSongController();
const deleteSongController = new DeleteSongController();

router.get('/', listAllSongController.handle);
router.get('/:id', listSongByIdController.handle);
router.post('/', createSongController.handle);
router.put('/:id', editSongController.handle);
router.delete('/:id', deleteSongController.handle);


export { router };

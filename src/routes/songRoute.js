import { Router } from 'express';

import songController from '../controller/SongController';

const router = new Router();

router.get('/', songController.index);
router.get('/:id', songController.show);
router.post('/', songController.store);
router.put('/:id', songController.update);
router.delete('/:id', songController.delete);

export default router;

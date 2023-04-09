import { Router } from 'express';

import { songsRoutes, songsPrefix } from './songRoute';
import { handlingErrors } from '../middlewares/handlingErrors';
import { handlingNotFound } from '../middlewares/handlingNotFound';

const routes = Router();

routes.use(songsPrefix, songsRoutes);

routes.use(handlingNotFound);
routes.use(handlingErrors);

export { routes };
import { Router } from 'express';

import { songsRoutes, songsPrefix } from './songRoute';
import { handlingErrors } from '../middlewares/handlingErrors';

const routes = Router();

routes.use(songsPrefix, songsRoutes);

routes.use(handlingErrors);

export { routes };
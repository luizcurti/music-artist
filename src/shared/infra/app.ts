import Database from '../infra/database/sequelize';

import express from 'express';

import { router } from './http/routes/songRoute';

class App {
  public server: any;

  constructor() {
    this.server = express();
  }

  async init() {
    await this.database();
    this.middlewares();
    this.routes();
  }

  async database() {
    console.log('[SERVER] DATABASE CONNECTING');
    await Database.init();
  }

  middlewares() {
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());

    console.log('[SERVER] MIDDLEWARES REGISTERED');
  }

  routes() {
    this.server.use('/api/music', router);

    console.log('[SERVER] ROUTES REGISTERED');
  }
}

export { App };

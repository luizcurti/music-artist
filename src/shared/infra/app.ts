import '@config/env';
import express from 'express';
import 'express-async-errors';

import helmet from 'helmet';
import cors from 'cors';

import Database from './database/index';

import { routes } from './http/routes/index';

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
    Database.sync()
    .then(() => {
      console.log("Database successfully connected");
    })
    .catch((err) => {
      console.log("Error", err);
    });
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(helmet());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());

    console.log('[SERVER] MIDDLEWARES REGISTERED');
  }

  routes() {
    this.server.use('/api/music', routes);

    console.log('[SERVER] ROUTES REGISTERED');
  }
}

export { App };

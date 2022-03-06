import './database';

import express from 'express';

import songRoute from './routes/songRoute';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/music', songRoute);
  }
}

export default new App().app;

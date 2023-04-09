'use strict';
import 'reflect-metadata';

import '@config/env';

import { Sequelize } from 'sequelize-typescript'
import { Song } from '@modules/song/infra/entities/Song';

class TypedDatabase {
  async init() {
    try {
      const connection = new Sequelize({
        username:process.env.DATABASE_USERNAME,
        password:process.env.DATABASE_PASSWORD,
        database:process.env.DATABASE,
        dialect:"mysql",
        host:process.env.DATABASE_HOST, 
        port:parseInt(process.env.DATABASE_PORT)
      })

      await connection.addModels([Song]);
      console.log(`[DATABASE] CONNECTED`);
    } catch (error) {
      console.log( `[DATABASE] ERROR`, error );
    }
  }
}

export default new TypedDatabase();

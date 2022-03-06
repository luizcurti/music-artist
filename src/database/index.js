import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Song from '../models/Song';

const models = [Song];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

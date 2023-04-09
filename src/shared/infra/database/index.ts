import { Sequelize } from "sequelize-typescript";
import { Song } from "../../../modules/song/infra/entities/Song";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "root",
  database: "music",
  logging: false,
  models: [Song],
});

export default connection;
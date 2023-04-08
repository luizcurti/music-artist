import '@config/env';
import config from '@config/index';

const { type, port, host, username, password, names } = config.database;
const { music } = names;

export default [
  {
    name: music,
    type,
    host,
    port,
    username,
    password,
    database: music,
    migrations: ['src/shared/infra/database/migrations/*.ts'],
    entities: ['src/modules/**/entities/*.ts'],
    cli: {
      migrationsDir: 'src/shared/infra/database/migrations',
    },
  },
];

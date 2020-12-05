import 'dotenv/config';
import { Options } from 'sequelize';

const databaseConfig: { [x: string]: Options } = {
  test: {
    storage: ':memory:',
    dialect: 'sqlite',
  },
  development: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    dialect: 'mysql',
    pool: {
      min: 2,
      max: 10,
    },
  },
  production: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    dialect: 'mysql',
    pool: {
      min: 2,
      max: 10,
    },
  },
};

export default databaseConfig;
module.exports = databaseConfig;

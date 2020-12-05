import config from './app/core/config';
import logger from './app/core/logger';
import database from './app/database/database';
import app from './app/app';

(async () => {
  try {
    await database.authenticate();
    app.listen(config.port, () => logger.info('server started.'));
  } catch (err) {
    logger.error('cannot start the server.');
  }
})();

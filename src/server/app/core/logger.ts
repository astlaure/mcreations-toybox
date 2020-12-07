import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.prettyPrint(),
    winston.format.timestamp(),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      eol: '\n',
      filename: 'app.log',
      dirname: 'logs',
      maxsize: 10 * 1024 * 1024,
      maxFiles: 10,
    }),
  ],
});

export default logger;

import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import securityRouter from './security/security.router';
import appRouter from './app.router';
import cookieSession from 'cookie-session';
import config from './core/config';
import security from './security/security';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({ secret: config.secret }));
app.use(security.session());
app.use(security.initialize());
app.use(csurf());

app.use('/api/security', securityRouter);
app.use(appRouter);

export default app;

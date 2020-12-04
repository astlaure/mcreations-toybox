import express from 'express';
import appRouter from './app.router';
import securityRouter from './security/security.router';

const app = express();

app.use('/api/security', securityRouter);
app.use(appRouter);

export default app;

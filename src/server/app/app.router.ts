import express from 'express';
import path from 'path';

const appRouter = express.Router();

appRouter.get('*', (req, res) => {
  return res.sendFile(path.resolve('bin/public/index.html'));
});

export default appRouter;

import express from 'express';
import security from './security';
import uploadMiddleware from '../uploads/upload.middleware';

const securityRouter = express.Router();
const loginMiddleware = security.authenticate('local', { session: true });

// securityRouter.use(csurf());

securityRouter.post('/login', loginMiddleware, (req, res) => {
  return res.sendStatus(200);
});

securityRouter.get('/userinfo', (req, res) => {
  return res.sendStatus(200);
});

// TODO REMOVE TEST ONLY
securityRouter.post('/avatar', uploadMiddleware.single('avatar'), (req, res) => {
  return res.sendStatus(200);
});

export default securityRouter;

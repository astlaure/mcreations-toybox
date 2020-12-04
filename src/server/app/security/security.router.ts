import express from 'express';

const securityRouter = express.Router();

securityRouter.post('/login', (req, res) => {
  return res.sendStatus(200);
});

securityRouter.get('/userinfo', (req, res) => {
  return res.sendStatus(200);
});

export default securityRouter;

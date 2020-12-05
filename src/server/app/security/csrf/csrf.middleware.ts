import { Request, Response, NextFunction } from 'express';

const csrfMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const xsrfCookie = req.cookies['XSRF-TOKEN'];

  if (!xsrfCookie) {
    res.cookie('XSRF-TOKEN', req.csrfToken(), { httpOnly: false, path: '/' });
  }

  return next();
}

export default csrfMiddleware;

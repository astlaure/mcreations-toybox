import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  filename(req, file, callback) {
    const filename = `${Date.now()}.${file.mimetype.split('/')[1]}`;
    callback(null, filename);
  },
  destination(req, file, callback) {
    const destination = path.resolve('uploads');
    callback(null, destination);
  },
});


const uploadMiddleware = multer({ storage });

export default uploadMiddleware;

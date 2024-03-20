import { Request } from 'express';
import multer, { Multer, MulterError } from 'multer'; 



const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null,  'public/images/');
  },
  filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

export default upload;

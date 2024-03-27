import { Request } from 'express';
import multer from 'multer'; 



const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null,  'public/images/logo');
  },
  filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const uploadLogo = multer({ storage });

export default uploadLogo;

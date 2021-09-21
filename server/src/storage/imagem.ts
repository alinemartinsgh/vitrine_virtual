import multer from 'multer';
import multerS3 from 'multer-s3';
import { v4 as uuid } from 'uuid';

import { s3 } from './config';

export const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'bucketvitrinevirtual',
    metadata: (_, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (_, file, cb) => {
      cb(null, `${uuid()}-${file.originalname}`);
    },
  }),
});

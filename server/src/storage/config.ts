import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { v4 as uuid } from 'uuid';

import {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_KEY,
  REGION,
} from '../utils/dotEnvConfig';

const s3 = new aws.S3({
  apiVersion: '2006-03-01',
  region: REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_KEY,
  },
});

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

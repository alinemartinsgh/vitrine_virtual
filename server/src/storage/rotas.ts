import { Router } from 'express';
import { s3 } from './config';

import { upload } from './imagem';

const router = Router();

export const uploadImg = router.post(
  '/upload',
  upload.single('imagem'),
  ({ file }, res) => {
    return res.json({ status: file });
  },
);

export const listarImg = router.get('/listarImg', (_, res) => {
  try {
    s3.listObjects(
      {
        Bucket: 'bucketvitrinevirtual',
      },
      (err, { Contents }) => {
        if (err) console.error(err);
        if (Contents) res.json(Contents);
      },
    );
  } catch (err) {
    console.error(err);
  }
});

export const rotaIdiota = router.get('/rota', (_, res) =>
  res.status(200).json({ message: 'ok' }),
);

export const deleteImg = router.delete('/deleteImg/:key', (req, res) => {
  try {
    s3.deleteObject(
      { Bucket: 'bucketvitrinevirtual', Key: req.params.key },
      (err, data) => {
        if (err) console.error(err);
        if (data) res.json(`${req.params.key} deletada`);
      },
    );
  } catch (err) {
    console.error(err);
  }
});

export default router;

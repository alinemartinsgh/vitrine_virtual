import { Router } from 'express';

import { uploadImagem, listaImagens, deletaImagem } from './imagem';

const router = Router();

export const uploadImg = router.post(
  '/uploadImagem',
  uploadImagem,
  ({ file }, res) => {
    return res.json({ file });
  },
);

/* export const uploadImg = router.post('/uploadImagem', async (req, res) => {
  console.log(req);
  await upload(req.body.key, req.body.file);
  res.send(200);
}); */

export const listarImg = router.get('/listarImagens', async (_, res) => {
  try {
    await listaImagens()
      .then(({ Contents }) => {
        return res.json(Contents).status(res.statusCode);
      })
      .catch((e) => res.json(`Error ${e.statusCode} Message: ${e.message}`));
  } catch {
    (e: Error) => console.log(e);
  }
});

export const deleteImg = router.delete(
  '/deleteImagem/:key',
  async ({ params }, res) => {
    try {
      await deletaImagem(params.key)
        .then(() => {
          return res.status(200).json(`${params.key} deletada`);
        })
        .catch((e) => res.json(`Error ${e.statusCode} Message: ${e.message}`));
    } catch {
      (e: Error) => console.log(e);
    }
  },
);

export default router;

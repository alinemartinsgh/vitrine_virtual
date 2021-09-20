import 'reflect-metadata';
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schemas from './graphql/schemas';
import { createConnection } from 'typeorm';
import { upload } from './storage/config';

const main = async () => {
  try {
    await createConnection();
  } catch (err) {
    console.error(err);
  }

  const app = Express();

  app.post('/upload', upload.single('imagemCampanha'), ({ file }, res) => {
    return res.json({ status: file });
  });

  const schema = await schemas();

  const apolloServer = new ApolloServer({ schema });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(8000, () => console.log(`Server running`));
};

main();

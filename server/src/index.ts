import 'reflect-metadata';
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schemas from './vitrine_virtual_db/schemas';
import { createConnection } from 'typeorm';

const main = async () => {
  try {
    await createConnection();
  } catch (err) {
    console.error(err);
  }

  const schema = await schemas();

  const server = new ApolloServer({ schema });

  await server.start();
  const app = Express();

  server.applyMiddleware({ app });

  app.listen(8000, () => console.log(`Server running`));
};

main();

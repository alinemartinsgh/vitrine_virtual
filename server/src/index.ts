import 'reflect-metadata';
import Express from 'express';
/* import { ApolloServer } from 'apollo-server-express';

import schemas from './graphql/schemas';
import { createConnection } from 'typeorm'; */
import router from './storage/rotas';

const app = Express();
/*
const main = async () => {
  try {
    await createConnection();
  } catch (err) {
    console.error(err);
  }

  app.use('/', router);

  const schema = await schemas();

  const apolloServer = new ApolloServer({ schema });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(8000, () => console.log(`GraphQL Server running`));
};

main(); */

app.use('/', router);

app.listen(4000, () => console.log(`Server running`));

export default app;

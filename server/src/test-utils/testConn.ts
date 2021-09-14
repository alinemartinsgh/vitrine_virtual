import { createConnection } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const testConn = (drop: boolean = false) => {
  return createConnection({
    type: 'mongodb',
    url: process.env.URL,
    database: process.env.BD,
    useNewUrlParser: true,
    synchronize: drop,
    dropSchema: drop,
    entities: ['./src/vitrine_virtual_db/entities/*.ts'],
  });
};

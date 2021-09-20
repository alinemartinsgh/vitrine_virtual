import { Connection } from 'typeorm';
import faker from 'faker';

import { gCall } from '../../test-utils/gCall';
import { testConn } from '../../test-utils/testConn';
import { Campanha } from '../../entity/Campanha';

let conn: Connection;

beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close();
});

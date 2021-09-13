import * as dotenv from 'dotenv';

dotenv.config({ path: '../../../.env' });

export const { URL, USUARIO, SENHA, BD } = <{ [key: string]: string }>(
  process.env
);

import Express from 'express';
import request from 'supertest';

const app = Express();

/* describe('GET /listarImg', () => {
  it('Deve retornar status code 200', async () => {
    const res = await Request(app).get('/listarImg');
    console.log(res);
    expect(res.statusCode).toBe(200);
  });
}); */

describe('GET /rotaIdiota', () => {
  it('Rota idiota', async () => {
    const res = await request(app).get('/');
    console.log(res.error);
    expect(res.status).toBe(200);
  });
});

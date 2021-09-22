import app from '../../index';
import request from 'supertest';

/* describe('GET /rotaIdiota', () => {
  it('Rota idiota', async () => {
    const res = await request(app).get('/rota').expect(200);
    const expectedResponse = { message: 'ok' };
    expect(JSON.parse(res.text)).toEqual(expectedResponse);
  });
}); */

describe('POST /upload', () => {
  it('Rota Post Upload de imagem deve retornar statusCode 200', async () => {
    const res = await request(app).post('/upload');
    expect(res.statusCode).toBe(200);
  });
  it('Rota Post Upload de imagem deve retornar mensagem "upload realizado"', async () => {
    return 'teste';
  });
});

describe('GET /listarImagens', () => {
  it('Rota Get Listar imagens deve retornar statusCode 200', async () => {
    return 'teste';
  });
});

describe('DELETE /deleteImg/:key', () => {
  it('Rota Delete deve retornar statusCode 200', async () => {
    return 'teste';
  });
  it('Rota Delete deve retornar mensagem "arquivo deletado"', async () => {
    return 'teste';
  });
});

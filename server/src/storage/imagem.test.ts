import { s3 } from './config';
import { listaImagens, deletaImagem } from './imagem';

describe('storage-imagem', () => {
  const promise = jest.fn();
  describe('listar imagens', () => {
    const listObjectsV2Spy = jest.spyOn(s3, 'listObjectsV2');
    it('deve retornar um array de objetos que estão no bucket', async () => {
      listObjectsV2Spy.mockReturnValue({
        promise: promise.mockResolvedValue('lista de objetos'),
      } as never);
      const response = await listaImagens();
      expect(listObjectsV2Spy).toHaveBeenCalledWith({
        Bucket: 'bucketvitrinevirtual',
      });
      expect(promise).toHaveBeenCalledWith();
      expect(response).toEqual('lista de objetos');
    });
  });

  describe('deletar imagem', () => {
    const deleteObjectSpy = jest.spyOn(s3, 'deleteObject');
    it('deve deletar uma imagem de acordo com a key', async () => {
      deleteObjectSpy.mockReturnValue({ promise } as never);
      await deletaImagem('imagem.jpg');
      expect(deleteObjectSpy).toBeCalledWith({
        Bucket: 'bucketvitrinevirtual',
        Key: 'imagem.jpg',
      });
      expect(promise).toBeCalledWith();
    });
  });
});

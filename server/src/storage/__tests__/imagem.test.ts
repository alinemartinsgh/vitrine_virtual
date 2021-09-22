import { s3 } from '../config';
import { listaImagens, deletaImagem } from '../imagem';
import { mockListaObjetosS3 } from '../__mocks__';

describe('storage-imagem', () => {
  const promise = jest.fn();
  describe('listar imagens', () => {
    const listObjectsV2Spy = jest.spyOn(s3, 'listObjectsV2');
    it('deve retornar um array de objetos que estão no bucket', async () => {
      listObjectsV2Spy.mockReturnValue({
        promise: promise.mockResolvedValue(mockListaObjetosS3),
      } as never);
      const response = await listaImagens();
      expect(listObjectsV2Spy).toHaveBeenCalledWith({
        Bucket: 'bucketvitrinevirtual',
      });
      expect(promise).toBeCalledWith();
      expect(response).toEqual(mockListaObjetosS3);
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

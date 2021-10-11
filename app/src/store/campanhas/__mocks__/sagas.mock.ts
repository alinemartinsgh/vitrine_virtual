import {CampanhaBuildMock} from './CampanhaBuildMock.mock';

export const firstCampanha = () =>
  new CampanhaBuildMock()
    .withId('6163763cb30dbd6ae5a54932')
    .withNome('boticario')
    .withImagem(
      'https://bucketvitrinevirtual.s3.amazonaws.com/cb8522c7-ed7e-455a-9603-2c55dfdea927-Claro.png',
    )
    .withCategoria('Bem-Estar')
    .withCreatedAt('2021-10-10T23:24:44.443Z')
    .withUpdatedAt('2021-10-11T13:12:27.400Z')
    .withUrlDestino('https://www.claro.com.br/claro-clube')
    .withDataInicio('2021-10-11')
    .withDataFim('2021-10-14');

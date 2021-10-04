import React from 'react';
import { useDispatch } from 'react-redux';

import {
  DataContainer,
  DataInput,
  FormContainer,
  ImagemContainer,
  ImagemInput,
  ImagemLabel,
  Select,
} from './style';
import Categorias from './CategoriaEnum';
import { actions } from 'src/store/campanhas';
import { CampanhaForm } from 'src/store/campanhas/types';
import { Input } from '../input';
import _ from 'lodash';

const FormCampanha: React.FC = () => {
  const dispatch = useDispatch();

  const data: CampanhaForm = {
    nome: 'aline',
    categoria: 'TOP',
    descricao: 'sucesso',
    imagem: 'não importa',
    dataFim: new Date(),
    dataInicio: new Date(),
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(actions.adicionarCampanha(data));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        nome="nomeCampanha"
        type="text"
        onchange={() => {}}
        placeholder="Nome da Campanha"
      />
      <Input
        nome="decricao"
        type="text"
        onchange={() => {}}
        placeholder="Descrição"
      />
      <Select>
        <option selected value="" hidden>
          Selecione
        </option>
        {_.map(Categorias, (categoria, key) => (
          <option value={key}>{categoria}</option>
        ))}
      </Select>
      <DataContainer>
        <DataInput name="dataInicio" type="date" />
        <DataInput name="dataFim" type="date" />
      </DataContainer>
      <ImagemContainer>
        <ImagemLabel htmlFor="imagem">Selecione sua imagem</ImagemLabel>
        <ImagemInput type="file" name="imagem" id="imagem" />
      </ImagemContainer>
    </FormContainer>
  );
};

export default FormCampanha;

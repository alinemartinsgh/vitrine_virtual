import React, { useState } from 'react';
import _ from 'lodash';
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
import { Input } from '../input';
import { Botao } from '../botao';

const FormCampanha: React.FC = () => {
  const dispatch = useDispatch();

  const [imagem, setImagem] = useState('');

  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    categoria: '',
    urlDestino: '',
    imagem,
    dataInicio: '',
    dataFim: '',
  });

  function handleInputText(e: any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(actions.adicionarCampanha(formData));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        nome="nome"
        type="text"
        value={formData.nome}
        onchange={handleInputText}
        placeholder="Campanha"
      />
      <Input
        nome="descricao"
        type="text"
        value={formData.descricao}
        onchange={handleInputText}
        placeholder="Descrição"
      />
      <Input
        nome="urlDestino"
        type="text"
        value={formData.urlDestino}
        onchange={handleInputText}
        placeholder="URL de Destino"
      />
      <Select
        onChange={handleInputText}
        name="categoria"
        value={formData.categoria}
      >
        <option disabled>Selecione</option>
        {_.map(Categorias, (categoriaItem, key) => (
          <option value={categoriaItem}>{categoriaItem}</option>
        ))}
      </Select>
      <DataContainer>
        <DataInput
          name="dataInicio"
          type="date"
          onChange={handleInputText}
          value={formData.dataInicio}
        />
        <DataInput
          name="dataFim"
          type="date"
          onChange={handleInputText}
          value={formData.dataFim}
        />
      </DataContainer>
      <ImagemContainer>
        <ImagemLabel htmlFor="imagem">Selecione sua imagem</ImagemLabel>
        <ImagemInput type="file" name="imagem" id="imagem" />
      </ImagemContainer>
      <Botao conteudo="Enviar" type="submit" />
    </FormContainer>
  );
};

export default FormCampanha;

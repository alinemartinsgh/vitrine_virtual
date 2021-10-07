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
import apiStorage from 'src/api/apiStorage';

const FormCampanha: React.FC = () => {
  const dispatch = useDispatch();

  const [imagem] = useState('');

  const [dadosCampanha, setdadosCampanha] = useState({
    nome: '',
    descricao: '',
    categoria: '',
    urlDestino: '',
    imagem: '',
    dataInicio: '',
    dataFim: '',
  });

  const handleUploadImage = (imagemUpload: any) => {
    try {
      const formData = new FormData();
      formData.append('imagem', imagemUpload);
      apiStorage.post('/uploadImagem', formData).then((res) => {
        const data: any = res.data;
        setdadosCampanha({
          ...dadosCampanha,
          imagem: data.location,
        });
      });
    } catch (err: any) {
      return err.message;
    }
  };

  function handleInput(e: any) {
    setdadosCampanha({
      ...dadosCampanha,
      [e.target.name]: e.target.value,
    });

    if (e.target.type === 'file') {
      handleUploadImage(e.target.files[0]);
      setdadosCampanha({
        ...dadosCampanha,
        imagem,
      });
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const envio = dispatch(actions.adicionarCampanha(dadosCampanha));
    if (envio.payload.data !== null) {
      console.log('form enviado com sucesso');
    }
  };

  const listaCategorias = [
    'Bem-estar',
    'Entretenimento',
    'Esporte',
    'Conectividade',
    'Viagem',
    'Gastronomia',
    'Varejo',
  ];

  return (
    <FormContainer onSubmit={handleSubmit} method="POST">
      <Input
        nome="nome"
        type="text"
        value={dadosCampanha.nome}
        onchange={handleInput}
        placeholder="Campanha"
      />
      <Input
        nome="descricao"
        type="text"
        value={dadosCampanha.descricao}
        onchange={handleInput}
        placeholder="Descrição"
      />
      <Input
        nome="urlDestino"
        type="text"
        value={dadosCampanha.urlDestino}
        onchange={handleInput}
        placeholder="URL de Destino"
      />
      <Select
        onChange={handleInput}
        name="categoria"
        value={dadosCampanha.categoria}
        required
      >
        <option defaultValue="" disabled hidden>
          Selecione
        </option>
        {listaCategorias.map((item, key) => (
          <option value={item} key={key}>
            {item}
          </option>
        ))}
      </Select>

      {/*    <select name="categoria" id="categoria" onChange={handleInput}>
        <option defaultValue="" disabled selected>
          Selecione...
        </option>
        {listaCategorias.map((item, key) => (
          <option value={item} key={key}>
            {item}
          </option>
        ))}
      </select> */}
      <DataContainer>
        <DataInput
          name="dataInicio"
          type="date"
          onChange={handleInput}
          value={dadosCampanha.dataInicio}
          required
        />
        <DataInput
          name="dataFim"
          type="date"
          onChange={handleInput}
          value={dadosCampanha.dataFim}
          required
        />
      </DataContainer>
      <ImagemContainer>
        <ImagemLabel htmlFor="imagem">Selecione sua imagem</ImagemLabel>
        <ImagemInput
          type="file"
          name="imagem"
          id="imagem"
          onChange={handleInput}
          required
        />
      </ImagemContainer>
      <Botao conteudo="Enviar" type="submit" />
    </FormContainer>
  );
};

export default FormCampanha;

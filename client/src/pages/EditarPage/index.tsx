import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import apiStorage from 'src/api/apiStorage';
import { Botao } from 'src/components/botao';
import {
  DataContainer,
  DataInput,
  FormContainer,
  ImagemContainer,
  ImagemInput,
  ImagemLabel,
  Select,
} from 'src/components/FormCampanha/style';
import { Input } from 'src/components/input';
import { actions } from 'src/store/campanhas';
import { Campanha } from 'src/store/campanhas/types';

interface CustomState {
  id: '';
  Campanha: Campanha;
}

const EditarCampanha: React.FC = () => {
  const dispatch = useDispatch();

  let data = useLocation();
  const state = data.state as CustomState;

  const [imagem] = useState(state.Campanha.imagem);
  const [dadosCampanha, setdadosCampanha] = useState({
    nome: state.Campanha.nome,
    descricao: state.Campanha.descricao,
    categoria: state.Campanha.categoria,
    urlDestino: state.Campanha.urlDestino,
    imagem: state.Campanha.imagem,
    dataInicio: state.Campanha.dataInicio,
    dataFim: state.Campanha.dataFim,
  });

  const handleUploadImage = (imagemUpload: any) => {
    try {
      const formData = new FormData();
      formData.append('imagem', imagemUpload);
      apiStorage.post('/uploadImagem', formData).then((res) => {
        const dataImage: any = res.data;
        setdadosCampanha({
          ...dadosCampanha,
          imagem: dataImage.location,
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
    dispatch(actions.atualizarCampanha(state.id, dadosCampanha));
  };

  return (
    <FormContainer onSubmit={handleSubmit} method="POST">
      <Input
        nome="nome"
        type="text"
        defaultValue={state.Campanha.nome}
        onchange={handleInput}
        placeholder="Campanha"
      />
      <Input
        nome="descricao"
        type="text"
        defaultValue={state.Campanha.descricao}
        onchange={handleInput}
        placeholder="Descrição"
      />
      <Input
        nome="urlDestino"
        type="text"
        defaultValue={state.Campanha.urlDestino}
        onchange={handleInput}
        placeholder="URL de Destino"
      />
      <Select
        onChange={handleInput}
        name="categoria"
        defaultValue={state.Campanha.categoria}
        required
      >
        <option value="Bem-Estar">Bem-Estar</option>
        <option value="Entretenimento">Entretenimento</option>
        <option value="Esporte">Esporte</option>
        <option value="Conectividade">Conectividade</option>
        <option value="Viagem">Viagem</option>
        <option value="Gastronomia">Gastronomia</option>
        <option value="Varejo">Varejo</option>
      </Select>
      <DataContainer>
        <DataInput
          name="dataInicio"
          type="date"
          onChange={handleInput}
          defaultValue={state.Campanha.dataInicio}
          required
        />
        <DataInput
          name="dataFim"
          type="date"
          onChange={handleInput}
          defaultValue={state.Campanha.dataFim}
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
        />
      </ImagemContainer>
      <Botao conteudo="Atualizar" type="submit" />
    </FormContainer>
  );
};

export default EditarCampanha;

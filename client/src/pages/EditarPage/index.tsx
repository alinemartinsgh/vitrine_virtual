import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import apiStorage from 'src/api/apiStorage';
import { Botao } from 'src/components/botao';
import Categorias from 'src/components/FormCampanha/Categoria';
import {
  DataContainer,
  DataInput,
  DataLabel,
  FormContainer,
  ImagemContainer,
  ImagemInput,
  ImagemLabel,
  Select,
} from 'src/components/FormCampanha/style';
import { Input } from 'src/components/input';
import { actions } from 'src/store/campanhas';
import { Campanha } from 'src/store/campanhas/types';
import { CampanhaImgMini, CampanhaImgMiniContainer } from './style';

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
    let urlImg = state.Campanha.imagem.split('/');
    let key = urlImg[urlImg.length - 1];
    try {
      apiStorage.delete('/deletarImagem/', { data: { key } });
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
        {Categorias.map((item, index) => (
          <option
            value={item}
            defaultValue={state.Campanha.categoria}
            key={index}
          >
            {item}
          </option>
        ))}
      </Select>
      <DataContainer>
        <DataLabel>Início da Campanha</DataLabel>
        <DataInput
          name="dataInicio"
          type="date"
          onChange={handleInput}
          defaultValue={state.Campanha.dataInicio}
          required
        />
        <DataLabel>Final da Campanha</DataLabel>
        <DataInput
          name="dataFim"
          type="date"
          onChange={handleInput}
          defaultValue={state.Campanha.dataFim}
          required
        />
      </DataContainer>
      <CampanhaImgMiniContainer>
        <CampanhaImgMini src={state.Campanha.imagem} />
      </CampanhaImgMiniContainer>
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

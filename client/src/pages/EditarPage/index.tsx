import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import apiStorage from 'src/api/apiStorage';
import { Botao } from 'src/components/botao';
import {
  BoxConfirm,
  BoxErro,
  ButtonContainer,
  DataContainer,
  DataInput,
  DataLabel,
  FormContainer,
  ImagemContainer,
  ImagemInput,
  ImagemLabel,
} from 'src/components/FormCampanha/style';
import Header from 'src/components/header';
import { Input } from 'src/components/input';
import { Select } from 'src/components/select';
import { actions } from 'src/store/campanhas';
import { Campanha } from 'src/store/campanhas/types';
import { CampanhaImgMini, CampanhaImgMiniContainer } from './style';

import * as selectors from '../../store/campanhas/selectors';

interface CustomState {
  id: '';
  Campanha: Campanha;
}

const EditarCampanha: React.FC = () => {
  const dispatch = useDispatch();

  const stateCampanha = useSelector(selectors.getListaCampanhas);
  console.log(stateCampanha);

  const [confirmacaoEnvio, setConfirmacaoEnvio] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(false);

  let data = useLocation();

  const state = data.state as CustomState;

  const campanha = stateCampanha.find((item) => item.id === state.id);

  console.log(campanha);

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

    if (dadosCampanha.dataInicio > dadosCampanha.dataFim) {
      setErroEnvio(true);
      return;
    }

    if (dadosCampanha) {
      dispatch(actions.atualizarCampanha(state.id, dadosCampanha));
      setErroEnvio(false);
      setConfirmacaoEnvio(true);
    }

    window.location.reload();
    window.location.href = '/homePage';
  };

  return (
    <>
      <Header />
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
        <DataContainer>
          <Select
            onchange={handleInput}
            name="categoria"
            defaultValue={state.Campanha.categoria}
          />
          <DataLabel>Inicia em</DataLabel>
          <DataInput
            name="dataInicio"
            type="date"
            onChange={handleInput}
            defaultValue={state.Campanha.dataInicio}
            required
          />
          <DataLabel>Termina em</DataLabel>
          <DataInput
            name="dataFim"
            type="date"
            onChange={handleInput}
            defaultValue={state.Campanha.dataFim}
            datatype="DD/MM/YYYY"
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
        <ButtonContainer>
          <Link
            to={{
              pathname: '/homePage',
            }}
          >
            <Botao bgColor="editar" conteudo="Voltar" type="button" />
          </Link>

          <Botao bgColor="enviar" conteudo="Atualizar" type="submit" />
        </ButtonContainer>
        {confirmacaoEnvio ? (
          <BoxConfirm confirm={confirmacaoEnvio}>
            Campanha Atualizada
          </BoxConfirm>
        ) : (
          <BoxErro erro={erroEnvio}>
            Campanha não atualizada, verifique se todos os campos estão corretos
          </BoxErro>
        )}
      </FormContainer>
    </>
  );
};

export default EditarCampanha;

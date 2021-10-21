import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import apiStorage from 'src/api/apiStorage';
import {
  Button,
  DateInput,
  Warningbox,
  Header,
  Input,
  ImageInput,
  Select,
} from '../../components';
import {
  ButtonContainer,
  DateContainer,
  FormContainer,
} from 'src/components/form/style';
import { actions } from 'src/store/campanhas';
import { Campanha } from 'src/store/campanhas/types';
import { CampanhaImgMini, CampanhaImgMiniContainer } from './style';

interface CustomState {
  id: '';
  Campanha: Campanha;
}

const EditarCampanha: React.FC = () => {
  const dispatch = useDispatch();

  const [confirmacaoEnvio, setConfirmacaoEnvio] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(false);

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

    if (dadosCampanha.dataInicio > dadosCampanha.dataFim) {
      setErroEnvio(true);
      return;
    }

    if (dadosCampanha) {
      dispatch(actions.atualizarCampanha(state.id, dadosCampanha));
      setErroEnvio(false);
      setConfirmacaoEnvio(true);
    }

    /* window.location.reload(); */
    /* window.location.href = '/homePage'; */
  };

  return (
    <>
      <Header />
      <FormContainer onSubmit={handleSubmit} method="POST">
        <Input
          name="nome"
          type="text"
          defaultValue={state.Campanha.nome}
          onchange={handleInput}
          placeholder="Campanha"
        />
        <Input
          name="descricao"
          type="text"
          defaultValue={state.Campanha.descricao}
          onchange={handleInput}
          placeholder="Descrição"
        />
        <Input
          name="urlDestino"
          type="text"
          defaultValue={state.Campanha.urlDestino}
          onchange={handleInput}
          placeholder="URL de Destino"
        />
        <DateContainer>
          <Select
            onchange={handleInput}
            name="categoria"
            defaultValue={state.Campanha.categoria}
          />
          <DateInput
            name="dataInicio"
            labelText="Inicia em"
            defaultValue={state.Campanha.dataInicio}
            onchange={handleInput}
          />
          <DateInput
            name="dataFim"
            labelText="Termina em"
            defaultValue={state.Campanha.dataFim}
            onchange={handleInput}
          />
        </DateContainer>
        <CampanhaImgMiniContainer>
          <CampanhaImgMini src={state.Campanha.imagem} />
        </CampanhaImgMiniContainer>
        <ImageInput
          content="Altere sua imagem"
          id="imagem"
          name="imagem"
          onchange={handleInput}
          htmlFor="imagem"
        />
        <ButtonContainer>
          <Link
            to={{
              pathname: '/homePage',
            }}
          >
            <Button bgColor="editar" content="Voltar" type="button" />
          </Link>

          <Button bgColor="enviar" content="Atualizar" type="submit" />
        </ButtonContainer>
        {confirmacaoEnvio ? (
          <Warningbox
            boxType="ok"
            messageReturn={confirmacaoEnvio}
            content="Campanha Atualizada"
          />
        ) : (
          <Warningbox
            boxType="error"
            messageReturn={erroEnvio}
            content="Campanha não atualizada, verifique se todos os campos estão corretos"
          />
        )}
      </FormContainer>
    </>
  );
};

export default EditarCampanha;

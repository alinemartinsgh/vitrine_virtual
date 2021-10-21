import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { actions } from 'src/store/campanhas';
import apiStorage from 'src/api/apiStorage';
import {
  Button,
  DateInput,
  Header,
  ImageInput,
  Input,
  Warningbox,
  Select,
} from 'src/components';

import {
  ButtonContainer,
  DateContainer,
  FormContainer,
} from 'src/components/form/style';

const AddPage: React.FC = () => {
  const dispatch = useDispatch();

  const [imagem] = useState('');

  const [erroData, setErroData] = useState('');

  const [confirmacaoEnvio, setConfirmacaoEnvio] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(false);

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

    if (dadosCampanha.dataInicio > dadosCampanha.dataFim) {
      setErroData('Data de fim da campanha vêm antes da data de início');
      setErroEnvio(true);
      return;
    }

    if (dadosCampanha.imagem === '') {
      setErroData('Imagem não selecionada');
      setErroEnvio(true);
      return;
    }

    const envio = dispatch(actions.adicionarCampanha(dadosCampanha));
    if (envio.payload.data !== null) {
      setErroData('');
      setErroEnvio(false);
      setConfirmacaoEnvio(true);
    }

    window.location.reload();
    /*     window.location.href = '/homePage';
     */
  };

  return (
    <>
      <Header />
      <FormContainer onSubmit={handleSubmit} method="POST">
        <Input
          name="nome"
          type="text"
          value={dadosCampanha.nome}
          onchange={handleInput}
          placeholder="Campanha"
        />
        <Input
          name="descricao"
          type="text"
          onchange={handleInput}
          value={dadosCampanha.descricao}
          placeholder="Descrição"
        />
        <Input
          name="urlDestino"
          type="text"
          onchange={handleInput}
          value={dadosCampanha.urlDestino}
          placeholder="URL de Destino"
        />
        <DateContainer>
          <Select
            onchange={handleInput}
            name="categoria"
            value={dadosCampanha.categoria}
          />
          <DateInput
            name="dataInicio"
            labelText="Inicia em"
            value={dadosCampanha.dataInicio}
            onchange={handleInput}
          />
          <DateInput
            name="dataFim"
            labelText="Termina em"
            value={dadosCampanha.dataFim}
            onchange={handleInput}
          />
        </DateContainer>
        <ImageInput
          content="Altere sua imagem"
          id="imagem"
          name="imagem"
          onchange={handleInput}
          htmlFor="imagem"
        />
        {erroData === '' ? null : <div>{erroData}</div>}
        <ButtonContainer>
          <Link
            to={{
              pathname: '/homePage',
            }}
          >
            <Button bgColor="editar" content="Voltar" type="button" />
          </Link>
          <Button bgColor="enviar" content="Enviar" type="submit" />
        </ButtonContainer>
        {confirmacaoEnvio ? (
          <Warningbox
            boxType="ok"
            messageReturn={confirmacaoEnvio}
            content="Campanha enviada com sucesso"
          />
        ) : (
          <Warningbox
            boxType="error"
            messageReturn={erroEnvio}
            content="Campanha não enviada, verifique se todos os campos estão corretos"
          />
        )}
      </FormContainer>
    </>
  );
};

export default AddPage;

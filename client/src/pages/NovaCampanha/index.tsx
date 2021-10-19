import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import apiStorage from 'src/api/apiStorage';
import { Botao } from 'src/components/botao';
import Categorias from 'src/components/FormCampanha/Categorias';
import {
  Box,
  ButtonContainer,
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
import { Link } from 'react-router-dom';
import Header from 'src/components/header';

const CampanhaPage: React.FC = () => {
  const dispatch = useDispatch();

  const [imagem] = useState('');

  const [erroData, setErroData] = useState('');

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
      return;
    }

    if (dadosCampanha.imagem === '') {
      setErroData('Imagem não selecionada');
      return;
    }

    const envio = dispatch(actions.adicionarCampanha(dadosCampanha));
    if (envio.payload.data !== null) {
      setErroData('');
    }
  };

  return (
    <>
      <Header />
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
          onchange={handleInput}
          value={dadosCampanha.descricao}
          placeholder="Descrição"
        />
        <Input
          nome="urlDestino"
          type="text"
          onchange={handleInput}
          value={dadosCampanha.urlDestino}
          placeholder="URL de Destino"
        />
        <DataContainer>
          <Select
            onChange={handleInput}
            name="categoria"
            value={dadosCampanha.categoria}
            required
          >
            <option value="" disabled hidden>
              Selecione...
            </option>
            {Categorias.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </Select>

          <Box>
            <DataLabel>Inicia em</DataLabel>

            <DataInput
              name="dataInicio"
              type="date"
              onChange={handleInput}
              value={dadosCampanha.dataInicio}
              required
            />
          </Box>
          <Box>
            <DataLabel>Termina em</DataLabel>

            <DataInput
              name="dataFim"
              type="date"
              onChange={handleInput}
              value={dadosCampanha.dataFim}
              required
            />
          </Box>
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
        {erroData === '' ? null : <div>{erroData}</div>}
        <ButtonContainer>
          <Link
            to={{
              pathname: '/homePage',
            }}
          >
            <Botao bgColor="editar" conteudo="Voltar" type="button" />
          </Link>
          <Botao bgColor="enviar" conteudo="Enviar" type="submit" />
        </ButtonContainer>
      </FormContainer>
    </>
  );
};

export default CampanhaPage;

import React, { FormEventHandler, useState } from 'react';
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
import { actions } from 'src/store/campanhas';
import { Input } from '../input';
import { Botao } from '../botao';
import apiStorage from 'src/api/apiStorage';

interface FormCampanhaProps {
  valueNomeCampanha: string;
  valueDescricaoCampanha: string;
  valueCategoriaCampanha: string;
  valueURLDestinoCampanha: string;
  valueDataInicioCampanha: string;
  valueDataFimCampanha: string;
  onsubmit: FormEventHandler;
  conteudoBotao: string;
}

const FormCampanha = ({
  valueNomeCampanha,
  valueDescricaoCampanha,
  valueCategoriaCampanha,
  valueURLDestinoCampanha,
  valueDataInicioCampanha,
  valueDataFimCampanha,
  onsubmit,
  conteudoBotao,
}: FormCampanhaProps) => {
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

  return (
    <FormContainer onSubmit={onsubmit} method="POST">
      <Input
        nome="nome"
        type="text"
        value={valueNomeCampanha}
        onchange={handleInput}
        placeholder="Campanha"
      />
      <Input
        nome="descricao"
        type="text"
        value={valueDescricaoCampanha}
        onchange={handleInput}
        placeholder="Descrição"
      />
      <Input
        nome="urlDestino"
        type="text"
        value={valueURLDestinoCampanha}
        onchange={handleInput}
        placeholder="URL de Destino"
      />
      <Select
        onChange={handleInput}
        name="categoria"
        value={valueCategoriaCampanha}
        required
      >
        <option selected={true} value="" hidden disabled>
          Selecione a categoria
        </option>
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
          value={valueDataInicioCampanha}
          required
        />
        <DataInput
          name="dataFim"
          type="date"
          onChange={handleInput}
          value={valueDataFimCampanha}
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
      <Botao conteudo={conteudoBotao} type="submit" />
    </FormContainer>
  );
};

export default FormCampanha;

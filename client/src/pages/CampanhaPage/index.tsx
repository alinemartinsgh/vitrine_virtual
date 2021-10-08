import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import apiStorage from 'src/api/apiStorage';
import FormCampanha from 'src/components/FormCampanha';
import { actions } from 'src/store/campanhas';

const CampanhaPage: React.FC = () => {
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
    <FormCampanha
      onsubmit={handleSubmit}
      valueNomeCampanha={dadosCampanha.nome}
      valueDescricaoCampanha={dadosCampanha.descricao}
      valueCategoriaCampanha={dadosCampanha.categoria}
      valueURLDestinoCampanha={dadosCampanha.urlDestino}
      valueDataInicioCampanha={dadosCampanha.dataInicio}
      valueDataFimCampanha={dadosCampanha.dataFim}
      conteudoBotao="Enviar"
    />
  );
};

export default CampanhaPage;

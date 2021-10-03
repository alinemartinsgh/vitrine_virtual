import React from 'react';
import { useDispatch } from 'react-redux';

import { FormContainer } from './style';
import { actions } from 'src/store/campanhas';
import { CampanhaForm } from 'src/store/campanhas/types';

const FormCampanha: React.FC = () => {
  const dispatch = useDispatch();

  const data: CampanhaForm = {
    nome: 'aline',
    categoria: 'TOP',
    descricao: 'sucesso',
    imagem: 'não importa',
    dataFim: new Date(),
    dataInicio: new Date(),
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(actions.adicionarCampanha(data));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <button type="submit">enviar</button>
    </FormContainer>
  );
};

export default FormCampanha;

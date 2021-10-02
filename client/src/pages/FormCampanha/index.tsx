//import _ from 'lodash';
import React from 'react';
import { useDispatch } from 'react-redux';
//import Input from 'src/components/Input';
//import Categorias from './CategoriaEnum';

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
      {/* <input type="text" placeholder="nome" name="nome" onChange={handleForm} />
      <input
        type="text"
        placeholder="descrição"
        name="descricao"
        onChange={handleForm}
      />
      <input
        type="text"
        placeholder="categoria"
        name="categoria"
        onChange={handleForm}
      />
      <input
        type="text"
        placeholder="imagem"
        name="imagem"
        onChange={handleForm}
      />
      <input
        type="text"
        placeholder="dataInicio"
        name="dataInicio"
        onChange={handleForm}
      />
      <input
        type="text"
        placeholder="dataFim"
        name="dataFim"
        onChange={handleForm}
      />
 */}
      <button type="submit">enviar</button>

      {/*    <Input
        name="nome"
        type="text"
        labelCampanha="Campanha"
        onchange={handleForm}
        value="campanha"
      />
      <Input
        name="descricao"
        type="text"
        labelCampanha="Descrição"
        onchange={handleForm}
        value="campanha"
      />
      <label htmlFor="categoria">Escolha a categoria</label>
      <div>
        <select name="categoria" onChange={handleForm}>
          <option disabled hidden defaultValue=""></option>
          {_.map(Categorias, (categoria, key) => (
            <option value={categoria} key={key}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      <Input name="dataInicio" type="date" labelCampanha="Início da campanha" />
      <Input name="dataFim" type="date" labelCampanha="Fim da campanha" /> */}
    </FormContainer>
  );
};

export default FormCampanha;

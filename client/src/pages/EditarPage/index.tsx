import React from 'react';
import { useLocation } from 'react-router';
import { Campanha } from 'src/store/campanhas/types';

interface CustomState {
  id: {};
  Campanha: Campanha;
}

function handleInput(e: any) {
  console.log('oi');
}

const listaCategorias = [
  'Bem-estar',
  'Entretenimento',
  'Esporte',
  'Conectividade',
  'Viagem',
  'Gastronomia',
  'Varejo',
];

const EditarCampanha: React.FC = () => {
  let data = useLocation();
  const state = data.state as CustomState;

  return (
    <select
      onChange={handleInput}
      name="categoria"
      defaultValue={state.Campanha.categoria}
      required
    >
      <option selected>{state.Campanha.categoria}</option>
      {listaCategorias.map((item, key) => (
        <option value={item} key={key}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default EditarCampanha;

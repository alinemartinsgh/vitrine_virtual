import React, { useEffect } from 'react';
import { actions } from 'src/store/campanhas';
import { useDispatch, useSelector } from 'react-redux';
import { getListaCampanhas } from 'src/store/campanhas/selectors';
import CampanhaItem from '../campanhaItem';
import { ListaContainer } from './styles';
import { Link } from 'react-router-dom';

const ListaCampanha: React.FC = () => {
  const dispatch = useDispatch();
  const listaCampanhas = useSelector(getListaCampanhas);

  useEffect(() => {
    dispatch(actions.buscaListaCampanhas());
  }, [dispatch]);

  const deletar = (id: string) => {
    dispatch(actions.deletarCampanha(id));
  };

  return (
    <ListaContainer>
      {listaCampanhas.map((item) => {
        return (
          <>
            <CampanhaItem
              key={item.id}
              nome={item.nome}
              dataInicio={item.dataInicio}
              dataFim={item.dataFim}
              categoria={item.categoria}
            />

            <Link
              to={{
                pathname: '/editar',
                state: { id: item.id, Campanha: item },
              }}
            >
              <button key={item.categoria}>Editar</button>
            </Link>
            <button key={item.nome} onClick={() => deletar(item.id)}>
              Deletar
            </button>
          </>
        );
      })}
    </ListaContainer>
  );
};

export default ListaCampanha;

import React, { useEffect } from 'react';
import { actions } from 'src/store/campanhas';
import { useDispatch, useSelector } from 'react-redux';
import { getListaCampanhas } from 'src/store/campanhas/selectors';

import {
  Table,
  ListaContainer,
  TableH,
  TableR,
  TableD,
  TableB,
  ButtonEditing,
  ButtonDeleting,
} from './styles';
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
      <Table>
        <TableH>
          <TableR>
            <TableD>Nome</TableD>
            <TableD>Dada de Início</TableD>
            <TableD>Data de Fim</TableD>
            <TableD>Categoria</TableD>
            <TableD colSpan={2}>Ações</TableD>
          </TableR>
        </TableH>
        {listaCampanhas.map((item) => {
          return (
            <TableB>
              <TableR>
                <TableD>{item.nome}</TableD>
                <TableD>{item.dataInicio}</TableD>
                <TableD>{item.dataFim}</TableD>
                <TableD>{item.categoria}</TableD>
                <TableD>
                  <Link
                    to={{
                      pathname: '/editar',
                      state: { id: item.id, Campanha: item },
                    }}
                  >
                    <ButtonEditing type="button"> Editar </ButtonEditing>
                  </Link>
                </TableD>
                <TableD>
                  <ButtonDeleting
                    key={item.id}
                    type="button"
                    onClick={() => deletar(item.id)}
                  >
                    Deletar
                  </ButtonDeleting>
                </TableD>
              </TableR>
            </TableB>
          );
        })}
      </Table>
    </ListaContainer>
  );
};

export default ListaCampanha;

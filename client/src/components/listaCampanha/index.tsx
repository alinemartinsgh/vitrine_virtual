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
  ButtonContainer,
} from './styles';
import { Link } from 'react-router-dom';
import { Botao } from '../botao';

const ListaCampanha: React.FC = () => {
  const dispatch = useDispatch();
  const listaCampanhas = useSelector(getListaCampanhas);

  useEffect(() => {
    dispatch(actions.buscaListaCampanhas());
  }, [dispatch]);

  const deletar = (id: string) => {
    dispatch(actions.deletarCampanha(id));
    window.location.reload();
  };

  return (
    <ListaContainer>
      <Table>
        <TableH>
          <TableR>
            <TableD>Nome</TableD>
            <TableD>Início</TableD>
            <TableD>Fim</TableD>
            <TableD>Categoria</TableD>
            <TableD>Ações</TableD>
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
                  <ButtonContainer>
                    <Link
                      to={{
                        pathname: '/editar',
                        state: { id: item.id, Campanha: item },
                      }}
                    >
                      <Botao bgColor="editar" conteudo="Editar" type="button" />
                    </Link>
                    <Botao
                      bgColor="deletar"
                      conteudo="Excluir"
                      key={item.id}
                      type="button"
                      onClick={() => deletar(item.id)}
                    />
                  </ButtonContainer>
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

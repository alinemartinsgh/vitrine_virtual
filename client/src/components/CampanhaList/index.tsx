import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getListaCampanhas } from 'src/store/campanhas/selectors';
import { actions } from 'src/store/campanhas';
import {
  Table,
  ContainerList,
  TableH,
  TableR,
  TableD,
  TableB,
  ButtonContainer,
} from './styles';
import { Button } from '../button';

export const CampanhaList: React.FC = () => {
  const dispatch = useDispatch();
  const getAllCampanhas = useSelector(getListaCampanhas);

  useEffect(() => {
    dispatch(actions.buscaListaCampanhas());
  }, [dispatch]);

  const deletar = (id: string) => {
    dispatch(actions.deletarCampanha(id));
    window.location.reload();
  };

  return (
    <ContainerList>
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
        {getAllCampanhas.map((item) => {
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
                      <Button bgColor="editar" content="Editar" type="button" />
                    </Link>
                    <Button
                      bgColor="deletar"
                      content="Excluir"
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
    </ContainerList>
  );
};

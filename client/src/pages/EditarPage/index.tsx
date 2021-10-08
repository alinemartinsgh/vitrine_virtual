import React from 'react';
import { useLocation } from 'react-router';

const EditarCampanha: React.FC = () => {
  let data = useLocation();
  console.log(data.state);
  return <div>Editar</div>;
};

export default EditarCampanha;

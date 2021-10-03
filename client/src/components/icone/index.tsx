import React from 'react';

import { IconeEstilizado } from './styles';

interface Props {
  image: any;
}

export const Icone = ({ image }: Props) => {
  return <IconeEstilizado background={image} />;
};

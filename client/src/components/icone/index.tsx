import React from 'react';

import { IconeEstilizado } from './styles';

interface Props {
  image: string;
}

export const Icone = ({ image }: Props) => {
  return <IconeEstilizado background={image} />;
};

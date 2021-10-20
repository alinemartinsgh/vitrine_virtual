import React, { ChangeEventHandler } from 'react';

import { ImageContainer, Input, ImageLabel } from './style';

interface Props {
  name: string;
  id: string;
  htmlFor: string;
  content: string;
  onchange: ChangeEventHandler<HTMLInputElement>;
}

export const ImageInput = ({ onchange, content, htmlFor, id, name }: Props) => {
  return (
    <ImageContainer>
      <ImageLabel htmlFor={htmlFor}>{content}</ImageLabel>
      <Input type="file" name={name} id={id} onChange={onchange} />
    </ImageContainer>
  );
};

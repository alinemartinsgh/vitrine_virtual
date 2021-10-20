import React from 'react';

import { CustomizedButton } from './styles';

interface Props {
  content: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  onSubmit?: () => void;
  bgColor: string;
}

export const Button = ({
  content,
  type,
  onClick,
  onSubmit,
  bgColor,
}: Props) => {
  return (
    <CustomizedButton
      type={type}
      bgColor={bgColor}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {content}
    </CustomizedButton>
  );
};

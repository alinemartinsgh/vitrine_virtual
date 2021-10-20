import React from 'react';
import { BoxMessage } from './style';

interface Props {
  boxType: string;
  messageReturn: boolean;
  content: string;
}

export const Warningbox = ({ boxType, messageReturn, content }: Props) => {
  return (
    <BoxMessage boxType={boxType} messageReturn={messageReturn}>
      {content}
    </BoxMessage>
  );
};

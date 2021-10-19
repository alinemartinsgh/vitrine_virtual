import React from 'react';
import {render} from '@testing-library/react-native';

import {SubTitle} from '../styles';

describe('Card Component', () => {
  it('nao renderiza texto quando não a texto', () => {
    const {getByText} = render(<SubTitle />);
    expect(getByText('')).not.toBeNull();
  });
});

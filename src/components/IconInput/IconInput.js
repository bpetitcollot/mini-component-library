import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.label`
    display: block;
    position: relative;
    width: ${p => p.width ? p.width + 'px' : '100%'};
    min-width: 5em;
    font-size: var(--size);
    border-bottom: var(--border) solid black;
    color: ${COLORS.gray700};
    &:hover{
      color: ${COLORS.black};
    }
`;
const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1em;
  height: 1em;
  margin: auto;
`;

const Input = styled.input`
  border: 0;
  padding-left: 2em;
  width: 100%;
  color: inherit;
  font-size: inherit;
`;

const SIZES = {
  'small': {
    '--size': 14 +'px',
    '--border': '1px',
  },
  'large': {
    '--size': 18 +'px',
    '--border': '2px',
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper width={width} style={{...SIZES[size]}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input type="text" placeholder={placeholder} size={size} />
      <InputIcon id={icon} size={size} />
  </Wrapper>
};

export default IconInput;

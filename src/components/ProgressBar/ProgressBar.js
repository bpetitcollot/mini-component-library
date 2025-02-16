/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: '.3em',
  medium: '.6em',
  large: '.9em',
};
const Wrapper = styled.div`
  height: 1em;
`;

const Label = styled.label`
  display: inline-block;
  width: 5em;
  min-width: 5em;
`;
const Bar = ({value, size, children}) => {
  return <BarWrapper size={size}>
    <BarContent value={value} />
  </BarWrapper>
}

const BarWrapper = styled.span`
  display: inline-block;
  height: ${p => SIZES[p.size]};
  min-width: 15em;
  overflow: hidden;
  border-radius: .2em;
  padding: ${p => p.size === 'large' && '2px'};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`;
const BarContent = ({value}) => {
  return <BarUnfilled>
    <BarFilled value={value} />
  </BarUnfilled>
}
const BarUnfilled = styled.span`
  display: block;
  border-radius: .2em;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;
const BarFilled = styled.span`
  display: block;
  height: 100%;
  width: ${p => (p.value) + '%'};
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  return <Wrapper role="progressbar" aria-valuenow={value}>
    <Label>{value} %</Label>
    <Bar value={value} size={size} />
  </Wrapper>
};

export default ProgressBar;

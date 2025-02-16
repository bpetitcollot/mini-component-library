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
const Wrapper = styled.label`
  height: 1em;
`;

const Label = styled.span`
  display: inline-block;
  width: 5em;
  min-width: 5em;
`;
const Bar = ({value, size}) => {
  return <BarWrapper size={size}>
    <BarContent max="100" value={value} />
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

// This component doesn't work for large variant on chrome (the border radius is not applied)
const BarContent = styled.progress`
  display: block;
  border-radius: 3px;
  height: 100%;
  width: 100%;
  &::-moz-progress-bar{
    background-color: ${COLORS.primary};
  }
  &::-webkit-progress-value{
    background-color: ${COLORS.primary};
  }
  &::-webkit-progress-bar{
    background-color: transparent;
  }
`;

const ProgressBar = ({ value, size }) => {
  return <Wrapper>
    <Label>{value} %</Label>
    <Bar value={value} size={size} />
  </Wrapper>
};

export default ProgressBar;

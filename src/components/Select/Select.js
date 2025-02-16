import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
`;
const SelectElement = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding: 12px 16px;
    opacity: 0;
`;
const SelectedElement = styled.div`
    display: inline-block;
  font-size: 16px;
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border: 0;
  border-radius: 8px;
  white-space: nowrap;
`;

const Caret = styled(Icon)`
    display: inline-block;
    height: 1em;
    margin-left: 1em;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <Wrapper>
          <SelectedElement>
              {displayedValue}
              <Caret id="chevron-down" />
          </SelectedElement>
          <SelectElement value={value} onChange={onChange}>
            {children}
        </SelectElement>
      </Wrapper>
  );
};

export default Select;

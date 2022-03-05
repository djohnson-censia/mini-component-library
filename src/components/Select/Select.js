import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({ label, value, onChange, children, iconSize = 24 }) => {
  const displayedValue = getDisplayedValue(value, children);
  iconSize = iconSize > 32 ? 32 : iconSize

  return (
    <OuterWrapper>
      <InnerWrapper value={value} onChange={onChange}>
        {children}
      </InnerWrapper>
      <Presentation>
          {displayedValue}
          <IconWrapper iconSize={iconSize}>
              <Icon id="chevron-down" strokeWidth={2} size={iconSize} />
          </IconWrapper>
      </Presentation>
    </OuterWrapper>
  );
};

const InnerWrapper = styled.select`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
`

const Presentation = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.gray50};
  border-radius: 8px;
  
  ${InnerWrapper}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${InnerWrapper}:hover + & {
    color: ${COLORS.black}
  }
`

const OuterWrapper = styled.div`
  position: relative;
  width: max-content;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin:auto;
  height: ${p=>p.iconSize}px;
  width: ${p=>p.iconSize}px;
  pointer-events: none;
`

export default Select;

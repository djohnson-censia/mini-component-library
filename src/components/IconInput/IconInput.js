import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        "--fontSize": 16 / 16 + "rem",
        "--padding": "4px 8px 3px 24px",
        "--border-bottom": `1px solid ${COLORS.black}`
    },
    large: {
        "--fontSize": 18 / 16 + "rem",
        "--padding": "4px 8px 2px 32px",
        "--border-bottom": `2px solid ${COLORS.black}`
    }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size = "large",
  placeholder,
}) => {
    const styles = SIZES[size] || SIZES["small"];
  return (
        <InputWrapper>
          <VisuallyHidden>{label}</VisuallyHidden>
          <IconWrapper size={size === "large" ? 24 : 18} id={icon} strokeWidth={size === "large" ? 2 : 1} />
          <CustomInput style={styles} width={width} placeholder={placeholder} />
          <VisuallyHidden>{label}</VisuallyHidden>
        </InputWrapper>
  )
  ;
};
const InputWrapper = styled.div`
  position: relative;
`
const CustomInput = styled.input`
  border: none;
  border-bottom: var(--border-bottom);
  padding: var(--padding);
  font-size: var(--fontSize);
  font-weight: bold;
  color: ${COLORS.gray700};
  width: ${p=>p.width}px;
  min-width: 100px;
  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: normal;
  }
  &:hover {
    color: ${COLORS.black}
  }
  &:focus {
    outline: 2px auto -webkit-focus-ring-color;
    outline-offset: 3px;
  }
;
`
const IconWrapper = styled(Icon)`
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  margin:auto;
  pointer-events: none;
  color: ${COLORS.gray700};
  font-weight: bold;

  ${CustomInput}:hover + & {
    background-color: ${COLORS.primary}
  }
`


export default IconInput;

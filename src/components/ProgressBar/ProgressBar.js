/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS, SIZES} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Wrapper
          role={"progressbar"}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          size={size}>
          <BarWrapper>
             <Bar value={value} size={size} />
          </BarWrapper>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Wrapper>;
};
const Wrapper = styled.div`
  height: ${p=>SIZES[p.size]}px;
  background-color: ${COLORS.gray50};
  border-radius:${p=>p.size === 'large' ? 8 : 4}px;
  width: 100%;
  padding:${p=>p.size === 'large' ? 4 : 0}px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`
const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${p=>p.value < 100 ? p.value : 100}%;
  border-radius:4px 0 0 4px;
`

const BarWrapper = styled.div`
  height: 100%;
  border-radius:${p=>p.size === 'large' ? 8 : 4}px;
  overflow: hidden;
`

export default ProgressBar;

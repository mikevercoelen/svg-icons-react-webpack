import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  color: inherit;
  fill: currentColor;
  width: inherit;
  height: inherit;
`;

export default ({ glyph }) => (
  <Icon>
    <use xlinkHref={glyph} />
  </Icon>
);

import React from 'react';
import styled from 'styled-components';

const IconHuge = styled.div`
  display: inline-block;
  margin: 8px;
  color: #e74c3c;
  width: 64px;
  height: 64px;
`;

const IconSmall = styled.div`
  display: inline-block;
  margin: 8px;
  color: #1abc9c;
  width: 16px;
  height: 16px;
`;

import Icon from '../Icon/Icon';

import Cross from '../../icons/Cross.svg';
import Location from '../../icons/Location.svg';

export default () => (
  <div>
    <div>
      <IconHuge>
        <Icon glyph={Cross} />
      </IconHuge>
      <IconHuge>
        <Icon glyph={Location} />
      </IconHuge>
    </div>
    <div>
      <IconSmall>
        <Icon glyph={Cross} />
      </IconSmall>
      <IconSmall>
        <Icon glyph={Location} />
      </IconSmall>
    </div>
  </div>
);


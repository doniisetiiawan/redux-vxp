import React from 'react';
import styled from 'styled-components';

import NormalImg from '../Img';
import LogoImg from './logo.png';

const Img = styled(NormalImg)`
  width: 50px;
  height: 50px;
  display: block;
`;

const Logo = (props) => <Img src={LogoImg} {...props} />;

export default Logo;

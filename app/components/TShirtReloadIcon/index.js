import React from 'react';
import Wrapper from './Wrapper';
import Button from './Button';
import RealoadImg from '../../assets/icons/Reload.png';

function TShirtReloadIcon() {
  return (
    <Wrapper>
      <Button>
        <img width="100px" src={RealoadImg} alt="Reaload Img" />
      </Button>
    </Wrapper>
  );
}

export default TShirtReloadIcon;

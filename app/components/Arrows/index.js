import React from 'react';
import Wrapper from './Wrapper';
import Button from './Button';
import arrowleft from '../../assets/icons/arrowleft.png';
import arrowRight from '../../assets/icons/arrowRight.png';

function Arrows() {
  return (
    <Wrapper>
      <Button>
        <img width="50px" src={arrowleft} alt="arrow left" />
      </Button>
      <Button>
        <img width="50px" src={arrowRight} alt="arrow Right" />
      </Button>
    </Wrapper>
  );
}

export default Arrows;

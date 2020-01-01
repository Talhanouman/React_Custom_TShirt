import React from 'react';
import Wrapper from './Wrapper';
import Button from './Button';
import Label from './Label';
import Product from '../../assets/icons/Product.png';
import AddText from '../../assets/icons/AddText.png';
import AddClipart from '../../assets/icons/AddClipart.png';

function DownMenu() {
  return (
    <Wrapper>
      <Button>
        <img src={Product} alt="Your Product" />
        <Label>Your Product</Label>
      </Button>
      <Button>
        <img src={AddText} alt="Your Product" />
        <Label>Add Text</Label>
      </Button>
      <Button>
        <img src={AddClipart} alt="Your Product" />
        <Label>Add Clipart</Label>
      </Button>
      <Button>
        <img src={AddClipart} alt="Your Product" />
        <Label>Upload Art</Label>
      </Button>
    </Wrapper>
  );
}

export default DownMenu;

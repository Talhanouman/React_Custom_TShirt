import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Button from './Button';
import Label from './Label';
import Product from '../../assets/icons/Product.png';
import AddText from '../../assets/icons/AddText.png';
import AddClipart from '../../assets/icons/AddClipart.png';

function MenuItemsSelector({
  onYourProductClick,
  onAddTextClick,
  onAddClipArtClick,
  onUploadArtClick,
}) {
  const handleOnMenuSelectorClick = index => {
    setActiveItem(index);
    // eslint-disable-next-line no-unused-expressions
    index === 0 && onYourProductClick();
    // eslint-disable-next-line no-unused-expressions
    index === 1 && onAddTextClick();
    // eslint-disable-next-line no-unused-expressions
    index === 2 && onAddClipArtClick();
    // eslint-disable-next-line no-unused-expressions
    index === 3 && onUploadArtClick();
  };
  const [activeItem, setActiveItem] = useState(activeItem && null);

  return (
    <Wrapper>
      <Button
        className={activeItem === 0 ? 'active_Button' : ''}
        onClick={() => handleOnMenuSelectorClick(0)}
      >
        <img src={Product} alt="Your Product" />
        <Label>Your Product</Label>
      </Button>
      <Button
        className={activeItem === 1 ? 'active_Button' : ''}
        onClick={() => handleOnMenuSelectorClick(1)}
      >
        <img src={AddText} alt="Your Product" />
        <Label>Add Text</Label>
      </Button>
      <Button
        className={activeItem === 2 ? 'active_Button' : ''}
        onClick={() => handleOnMenuSelectorClick(2)}
      >
        <img src={AddClipart} alt="Your Product" />
        <Label>Add Clip art</Label>
      </Button>
      <Button
        className={activeItem === 3 ? 'active_Button' : ''}
        onClick={() => handleOnMenuSelectorClick(3)}
      >
        <img src={AddClipart} alt="Your Product" />
        <Label>Upload Art</Label>
      </Button>
    </Wrapper>
  );
}

MenuItemsSelector.propTypes = {
  onYourProductClick: PropTypes.func,
  onAddTextClick: PropTypes.func,
  onAddClipArtClick: PropTypes.func,
  onUploadArtClick: PropTypes.func,
};

export default MenuItemsSelector;

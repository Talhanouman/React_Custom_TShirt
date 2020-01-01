import React from 'react';
import Shop from './Shop';
import Button from './Button';
import Cart from '../../../../assets/icons/Cart.png';

function ShowCardHover() {
  return (
    <div className="hover">
      <div className="Content">
        <div className="desc mb-2">
          <p>Was Google mocking VR and poking fun at Oculus</p>
        </div>
        <div className="price mb-4">
          <span>$499</span>
        </div>
        <div className="button">
          <Button className="btn btn-primary">
            <Shop>Shop now</Shop>
            <span className="ml-2">
              <img src={Cart} width="12px" alt="Cart" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShowCardHover;

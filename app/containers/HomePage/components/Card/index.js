import React from 'react';
import PropTypes from 'prop-types';
import Font14 from './Font14';
import Color from './Color';
import CardStyle from './CardStyle';
import yellow from '../../../../images/1.png';

function Card({ title, type, price }) {
  return (
    <CardStyle className="CardStyle">
      <div className="img">
        <img width="100%" src={yellow} alt="yellow" />
      </div>
      <div className="title">
        <Font14>{title}</Font14>
      </div>
      <div className="color">
        <Color>{type}</Color>
      </div>
      <div className="Price">
        <label>$ {price}</label>
      </div>
    </CardStyle>
  );
}

Card.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Card;

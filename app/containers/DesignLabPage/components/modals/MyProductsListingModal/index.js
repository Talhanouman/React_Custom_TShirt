import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import GlobalStyle from '../../../../../global-styles';
import Title from './Title';
import H6 from './H6';
import Font14 from './Font14';
import Description from './Description';
import H5 from './H5';
import Width from './Width';
import Focus from './Focus';
import ButtonClr from './ButtonClr';

function ProductsListingModal({ showProductsListing, onProductsListingClose }) {
  return (
    <>
      <Modal show={showProductsListing} onHide={onProductsListingClose}>
        <div className="Model-global">
          <Modal.Header closeButton />
          <Modal.Body>
            <div className="title mb-4 text-center">
              <Title>Enter Your Sizes</Title>
            </div>
            <Description>
              <H6>Enter quantities to calculate the price </H6>
              <Font14 className="Font-14">
                Save money by increasing quantity and reducing ink colors in
                your design
              </Font14>
            </Description>
            <Width className="checkbox">
              <div className="title">
                <H5>A100 Adult men Ultra Cotton.</H5>
              </div>
              <div className="checkbox">
                <input type="radio" id="radio" />
                <span className="ml-2 text-capitalize" id="radio">
                  white
                </span>
              </div>
            </Width>
            <div className="form text-center">
              <div className="row text-center d-flex justify-content-center mb-4">
                <div className="col-md-2">
                  <div className="title">
                    <span>S</span>
                  </div>
                  <div className="input">
                    <Focus className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="title">
                    <span>M</span>
                  </div>
                  <div className="input">
                    <Focus className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="title">
                    <span>L</span>
                  </div>
                  <div className="input">
                    <Focus className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="title">
                    <span>XL</span>
                  </div>
                  <div className="input">
                    <Focus className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="title">
                    <span>2XL</span>
                  </div>
                  <div className="input">
                    <Focus className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <ButtonClr variant="primary" onClick={onProductsListingClose}>
              Calculate Price
            </ButtonClr>
          </Modal.Footer>
        </div>
        <GlobalStyle />
      </Modal>
    </>
  );
}

ProductsListingModal.propTypes = {
  showProductsListing: PropTypes.bool,
  onProductsListingClose: PropTypes.func,
};

export default ProductsListingModal;

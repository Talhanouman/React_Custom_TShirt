import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import GlobalStyle from '../../../../../global-styles';
import Title from './Title';
import H6 from './H6';
import Font14 from './Font14';
import Description from './Description';
import Width from './Width';
import ButtonClr from './ButtonClr';
import TShirt from '../../../../../images/PopShirt.png';
import arrow from '../../../../../assets/icons/NextArrow.png';
import Decoration from './Decoration';
import LineWidth from './LineWidth';

function AddTShirtSizeModal({
  showAddTShirtSizeModal,
  onAddTShirtSizeModalClose,
  onProductsListingClose,
}) {
  return (
    <>
      <Modal show={showAddTShirtSizeModal} onHide={onAddTShirtSizeModalClose}>
        <div className="Model-global">
          <Modal.Header closeButton />
          <Modal.Body>
            <div className="title mb-4 text-center">
              <Title>My Products</Title>
            </div>
            <div className="col-md-12">
              <div className="col-md-12">
                <Description>
                  <H6 className="mb-2">
                    G200 Adult Ultra Cotton 6 oz. T-Shirt by Gildan
                  </H6>
                  <Font14 className="Font-14 mb-2">4 colors front </Font14>
                  <Font14 className="Font-14">0 colors back</Font14>
                </Description>
              </div>
            </div>
            <LineWidth />
            <Description>
              <div className="d-flex align-items-center">
                <div className="col-md-3">
                  <img src={TShirt} alt="TShirt" />
                </div>
                <div className="col-md-9">
                  <div className="col-md-12 mb-3 d-flex">
                    <div className="col-md-8">
                      <span>White</span>
                    </div>
                    <div className="col-md-4">
                      <Decoration className="text-nowrap">WAS 150</Decoration>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex">
                    <div className="col-md-8">
                      <span>1 Pieces</span>
                      <span className="pl-3">Edit</span>
                    </div>
                    <div className="col-md-4">
                      <span className="text-danger">120 each</span>
                    </div>
                  </div>
                </div>
              </div>
            </Description>
            <LineWidth />
            <Description>
              <div className="col-md-12 mb-2 d-flex">
                <div className="col-md-8">
                  <span>Subtotal</span>
                </div>
                <div className="col-md-4 text-center">
                  <span>150</span>
                </div>
              </div>
              <div className="col-md-12 mb-2 d-flex">
                <div className="col-md-8">
                  <span className="text-nowrap text-success">
                    Standard Delivery - 30% Discount
                  </span>
                </div>
                <div className="col-md-4 text-center">
                  <span>-30</span>
                </div>
              </div>
              <div className="col-md-12 mb-2 d-flex">
                <div className="col-md-8">
                  <span>Shipping & Handing</span>
                </div>
                <div className="col-md-4 text-center">
                  <span>FREE</span>
                </div>
              </div>
            </Description>
            <LineWidth />
            <Description>
              <div className="col-md-12 mb-2 d-flex">
                <div className="col-md-8">
                  <span>Your Total (1 Pieces)</span>
                </div>
                <div className="col-md-4 text-center">
                  <span>150</span>
                </div>
              </div>
            </Description>
            <Width className="checkbox" />
          </Modal.Body>
          <Modal.Footer>
            <ButtonClr variant="primary" onClick={onProductsListingClose}>
              <span>Add to Cart</span>
              <img className="pl-3" src={arrow} alt="arrow" />
            </ButtonClr>
          </Modal.Footer>
        </div>
        <GlobalStyle />
      </Modal>
    </>
  );
}

AddTShirtSizeModal.propTypes = {
  showAddTShirtSizeModal: PropTypes.bool,
  onAddTShirtSizeModalClose: PropTypes.func,
  onProductsListingClose: PropTypes.func,
};

export default AddTShirtSizeModal;

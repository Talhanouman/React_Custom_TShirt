import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import GlobalStyle from '../../../../../global-styles';

function SaveMyDesignModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <div className="Model-global">
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="title text-center">
            <h5>Save my design</h5>
          </div>
          <div className="description">
            <p>
              We have you covered. All saved designs are held indefinitely on
              our servers, so whether you order now or a year later your design
              will be here waiting for you
            </p>
          </div>
          <div className="form">
            <div className="Name">
              <div className="title">
                <span>Design Name</span>
              </div>
              <div className="input">
                <input className="form-control" />
              </div>
            </div>
            <div className="email">
              <div className="title">
                <span>Email</span>
              </div>
              <div className="input">
                <input className="form-control" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Design
          </Button>
        </Modal.Footer>
      </div>
      <GlobalStyle />
    </Modal>
  );
}

SaveMyDesignModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default SaveMyDesignModal;

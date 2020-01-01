import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';

function Details({ title, type }) {
  return (
    <div className="Details_Tshirt">
      <Dropdown>
        <Dropdown.Toggle
          className="text-left w-100 mb-2"
          variant="success"
          id="dropdown-basic"
        >
          <label>{title}</label>
          <label className="Details-Tshirt_type">{type}</label>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Details;

Details.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
};

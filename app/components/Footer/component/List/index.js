import React from 'react';
import PropTypes from 'prop-types';

function List({ title, item1, item2, item3, item4 }) {
  return (
    <div className="list">
      <ul>
        <li className="title">{title}</li>
        <li>
          <a href="homepage">{item1}</a>
        </li>
        <li>
          <a href="homepage">{item2}</a>
        </li>
        <li>
          <a href="homepage">{item3}</a>
        </li>
        <li>
          <a href="homepage">{item4}</a>
        </li>
      </ul>
    </div>
  );
}

List.propTypes = {
  title: PropTypes.string,
  item1: PropTypes.string,
  item2: PropTypes.string,
  item3: PropTypes.string,
  item4: PropTypes.string,
};

export default List;

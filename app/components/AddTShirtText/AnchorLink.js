import React from 'react';
import PropTypes from 'prop-types';
import LinksStyle from './LinksStyle';

function AnchorLink({ title }) {
  return (
    <div className="Link">
      <LinksStyle href="home">{title}</LinksStyle>
    </div>
  );
}

export default AnchorLink;

AnchorLink.propTypes = {
  title: PropTypes.string,
};

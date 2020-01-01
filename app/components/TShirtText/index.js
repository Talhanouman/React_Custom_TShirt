import React from 'react';
import Text from 'react-svg-text';
import PropTypes from 'prop-types';
// import Wrapper from './Wrapper';

function TShirtTextSVG(props) {
  const {
    x,
    y,
    width,
    textAnchor,
    verticalAnchor,
    lineHeight,
    scaleToFit,
    angle,
    fontSize,
    fontFamily,
    textInput,
  } = props;
  return (
    // <Wrapper>
    <Text
      x={x}
      y={y}
      width={width}
      textAnchor={textAnchor}
      verticalAnchor={verticalAnchor}
      lineHeight={lineHeight}
      scaleToFit={scaleToFit}
      angle={angle}
      style={{
        fontSize,
        fontFamily,
      }}
    >
      {textInput && textInput.value}
    </Text>
    // </Wrapper>
  );
}

TShirtTextSVG.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  textAnchor: PropTypes.string,
  verticalAnchor: PropTypes.string,
  lineHeight: PropTypes.string,
  scaleToFit: PropTypes.bool,
  angle: PropTypes.number,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  textInput: PropTypes.string,
};

export default TShirtTextSVG;

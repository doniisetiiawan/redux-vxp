import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  const { src, alt, className } = props;
  return <img className={className} src={src} alt={alt} />;
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;

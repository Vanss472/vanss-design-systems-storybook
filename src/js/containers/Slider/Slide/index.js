import React from 'react';
import PropTypes from 'prop-types';

const Slide = (props) => {
  const {
    current, className, imagePath, srcSet1280, srcSet1024, srcSet768, altText, ariaHidden, order, transition,
  } = props;

  return (
    <li className={`${className} ${current || ''}`} aria-hidden={ariaHidden} style={{ order, transform: `translateX(${transition}%)` }}>
      <picture>
        <source media="(min-width: 1280px)" srcSet={srcSet1280} />
		    <source media="(min-width: 1024px)" srcSet={srcSet1024} />
		    <source media="(min-width: 768px)" srcSet={srcSet768} />
        <img
          alt={altText}
          src={imagePath}
        />
      </picture>
    </li>
  );
};

Slide.propTypes = {
  current: PropTypes.string,
  className: PropTypes.string,
  imagePath: PropTypes.string.isRequired,
  srcSet1280: PropTypes.string.isRequired,
  srcSet1024: PropTypes.string.isRequired,
  srcSet768: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  ariaHidden: PropTypes.string,
  order: PropTypes.number,
  transition: PropTypes.number,
};

Slide.defaultProps = {
  current: 'is-active',
  className: 'slide-item',
  ariaHidden: true,
  order: '',
  transition: 0,
};

export default Slide;

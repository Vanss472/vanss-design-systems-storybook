import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
    };

    this.imageRef = React.createRef();
  }

	slideImages = () => {
	  this.setState({
	    width: this.imageRef.current.naturalWidth,
	    height: this.imageRef.current.naturalHeight,
	  });
	}

	render() {
	  const { width, height } = this.state;
	  const {
	    current, className, imagePath, altText, ariaHidden,
	  } = this.props;

	  return (
			<li className={`${className} ${current || ''}`} aria-hidden={ariaHidden}>
				<img ref={this.imageRef} onLoad={this.slideImages} src={imagePath} alt={altText} width={width} height={height} />
			</li>
	  );
	}
}

Slide.propTypes = {
  current: PropTypes.string,
  className: PropTypes.string,
  imagePath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  ariaHidden: PropTypes.string,
};

Slide.defaultProps = {
  current: 'is-active',
  className: 'slide-item',
  ariaHidden: true,
};

export default Slide;

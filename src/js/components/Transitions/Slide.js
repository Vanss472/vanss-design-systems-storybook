import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

import { cubic } from '../../mixins';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    const height = this.wrapper.clientHeight;

    this.setHeight(height);
  }

  componentDidUpdate() {
    const { clientHeight } = this.wrapper;
    const { height } = this.state;

    if (clientHeight !== height) {
      this.setHeight(clientHeight);
    }
  }

  setHeight(height) {
    this.setState({ height });
  }

  render() {
    const { in: inProp, children, initialHeight } = this.props;
    const { height } = this.state;
    const duration = 300;

    const defaultStyle = {
      overflow: 'hidden',
      maxHeight: initialHeight || 0,
      transition: `max-height ${cubic()}`,
    };

    const transitionStyles = {
      entering: { maxHeight: `${height}px` },
      entered: { maxHeight: `${height}px` },
    };

    return (
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          >
            <div
              ref={(e) => {
                this.wrapper = e;
              }}
            >
              {children}
            </div>
          </div>
        )}
      </Transition>
    );
  }
}

Slide.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.element,
  initialHeight: PropTypes.number,
};

export default Slide;

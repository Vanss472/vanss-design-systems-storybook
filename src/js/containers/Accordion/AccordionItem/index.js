import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

import * as Accordion from '../styled';
import { cubic } from '../../../utils/mixins';

class AccordionItem extends Component {
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
    const {
      isCollapsed, panelId, buttonId, handleClick, label, children, in: inProp,
    } = this.props;

    const { height } = this.state;

    const duration = 300;

    const defaultStyle = {
      overflow: 'hidden',
      maxHeight: isCollapsed ? `${height}px` : 0,
      transition: `max-height ${cubic()}`,
    };

    const transitionStyles = {
      entering: { maxHeight: `${height}px` },
      entered: { maxHeight: `${height}px` },
      exiting: { maxHeight: 0 },
      exited: { maxHeight: 0 },
    };

    return (
      <>
        <Accordion.Tittle>
          <button
            type="button"
            aria-expanded={isCollapsed}
            className="Accordion-trigger"
            aria-controls={panelId}
            id={buttonId}
            onClick={() => handleClick()}
          >
            <span className="Accordion-title">
              {label}
              <span className="Accordion-icon"></span>
            </span>
          </button>
        </Accordion.Tittle>
        <Transition in={inProp} timeout={duration}>
          {
            (state) => (
              <Accordion.Panel
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                style={{
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
              </Accordion.Panel>
            )
          }
        </Transition>
      </>
    );
  }
}

AccordionItem.propTypes = {
  isCollapsed: PropTypes.bool,
  buttonId: PropTypes.string,
  panelId: PropTypes.string,
  handleClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  in: PropTypes.bool,
};

AccordionItem.defaultProps = {
  isCollapsed: false,
  buttonId: 'btn1id',
  panelId: 'panel1id',
  handleClick: () => { this.changeItem(); },
  in: false,
};

export default AccordionItem;

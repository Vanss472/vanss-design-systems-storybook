import React from 'react';
import PropTypes from 'prop-types';

import * as Accordion from '../styled';

const style = {
  collapsed: {
    display: 'none',
  },
  expanded: {
    display: 'block',
  },
};

const AccordionItem = (props) => {
  const {
    isCollapsed, panelId, buttonId, handleClick, label, children,
  } = props;
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
      <Accordion.Panel
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        style={isCollapsed ? style.expanded : style.collapsed}
      >
        {children}
      </Accordion.Panel>
    </>
  );
};

AccordionItem.propTypes = {
  isCollapsed: PropTypes.bool,
  buttonId: PropTypes.string,
  panelId: PropTypes.string,
  handleClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

AccordionItem.defaultProps = {
  isCollapsed: false,
  buttonId: 'btn1id',
  panelId: 'panel1id',
  handleClick: () => { this.changeItem(); },
};

export default AccordionItem;

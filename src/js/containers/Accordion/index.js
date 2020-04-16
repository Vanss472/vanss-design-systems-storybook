/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bindIndex: props.defaultIndex,
    };
  }

  changeItem = (itemIndex) => {
    const { onItemClick } = this.props;
    const { bindIndex } = this.state;

    // console log item index onClick
    if (typeof onItemClick === 'function') {
      onItemClick(itemIndex);
    }

    if (itemIndex !== bindIndex) {
      this.setState({
        bindIndex: itemIndex,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { bindIndex } = this.state;
    const items = children.filter((item) => item.type.name === 'AccordionItem');
    return (
      <section className="wrapper">
        {
          items.map(({ props }) => (
            <AccordionItem
              key={props.index}
              buttonId={`btn${props.index}id`}
              panelId={`panel${props.index}id`}
              in={bindIndex === props.index}
              isCollapsed={bindIndex === props.index}
              label={props.label}
              handleClick={() => this.changeItem(props.index)}
              children={props.children}
            />
          ))
        }
      </section>
    );
  }
}

Accordion.propTypes = {
  defaultIndex: PropTypes.string,
  onItemClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Accordion.defaultProps = {
  defaultIndex: '1',
  onItemClick: () => {},
};

export default Accordion;

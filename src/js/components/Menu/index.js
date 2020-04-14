import React, { useState } from 'react';
import PropTypes from 'prop-types';

import data from './data.json';
import {
  Header, MobileNavWrapper, MobileButton, Nav, NavLink,
} from './styled';

const Menu = ({ ariaLabel }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Header id="l--main-header">
      <MobileNavWrapper>
        <MobileButton onClick={toggleMenu} aria-expanded={open} className="mobile-nav-trigger" aria-label="Mobile Navigation Trigger">
          <svg className="icon icon-menu-toggle" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100">
            <g className="svg-menu-toggle">
              <path className="line line-1" d="M5 13h90v14H5z" />
              <path className="line line-2" d="M5 43h90v14H5z" />
              <path className="line line-3" d="M5 73h90v14H5z" />
            </g>
          </svg>
        </MobileButton>
      </MobileNavWrapper>
      <Nav open={open} className="main-menu" aria-label={ariaLabel} aria-hidden={!open}>
        <ul>
          {
						data.mainMenuItem.map((item) => (
              <li key={item.id} className={`menu-item ${item.isActive}`}>
                <NavLink href={item.href}>{item.text}</NavLink>
              </li>
						))
					}
        </ul>
      </Nav>
    </Header>
  );
};

Menu.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
};


export default Menu;

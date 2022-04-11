import React from 'react';

import { slide as Menu } from 'react-burger-menu';

import './sidebar.css';


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="GeneralBoard">
        General Board
      </a>
      <a className="menu-item" href="/EducationBoard">
        Events Board
      </a>
      <a className="menu-item" href="/SocietyBoard">
        Society Board
      </a>
      <a className="menu-item" href="/Settings">
        Settings
      </a>
    </Menu>
  );
};
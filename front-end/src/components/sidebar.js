import React from 'react';

import { slide as Menu } from 'react-burger-menu';

import './sidebar.css';


export default props => {
  return (
    <Menu>
<<<<<<< HEAD
      <a className="menu-item" href="/Homepage">
        Homepage
      </a>
      <a className="menu-item" href="GeneralBoard">
=======
      <a className="menu-item" href="/GeneralBoard">
>>>>>>> 3b455066d635da1f51683219ec2883c056bfd2e2
        General Board
      </a>
      <a className="menu-item" href="/EventsBoard">
        Events Board
      </a>
      <a className="menu-item" href="/SocietyBoard">
        Society Board
      </a>
    </Menu>
  );
};
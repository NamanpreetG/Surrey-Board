import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";

import { slide as Menu } from 'react-burger-menu';

import './sidebar.css';

export default props => {
  const [listSocieties, setListOfSocieties] = useState([])
  const user_values = JSON.parse(localStorage.getItem("user"));
  var user_id = '62575e9a6c55542b850ef88f'

  if (user_values) {
    user_id = user_values._id
  }

  

  useEffect(async () => {

    const res =  await Axios.post("http://localhost:3007/society/mysocieties", {user_id : user_id});
    const list = res.data.result[0].society
    setListOfSocieties(list)    

  }, []);

  return (
    <>
      {(<Menu>
        <a className="menu-item" href="/GeneralBoard">
          General Board
        </a>
        <a className="menu-item" href="/EventsBoard">
          Events Board
        </a>
        <a> Test </a>

      </Menu>)}
    </>
  );
};
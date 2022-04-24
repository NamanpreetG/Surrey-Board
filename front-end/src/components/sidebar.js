import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

import "./sidebar.css";

function Sidebar(props) {
  const [listSocieties, setListOfSocieties] = useState([]);
  const user_values = JSON.parse(localStorage.getItem("user"));
  const user_id = user_values._id;

  useEffect(async () => {
    const res = await Axios.post("http://localhost:3007/society/mysocieties", {
      user_id: user_id,
    });
    const list = res.data.result[0].society;
    setListOfSocieties(list);
  }, []);

  const st = { fontSize: "16px", textAlign: "center" };

  const navigate = useNavigate();

  function changeToSoc(id, name) {
    navigate("/SocietyBoard", {
      state: { society_id: id, name : name },
      replace: true,
    });
    window.location.reload();
  }

  return (
    <>
      <Menu>
        <a className="menu-item" href="/GeneralBoard">
          General Board
        </a>
        <a className="menu-item" href="/EventsBoard">
          Events Board
        </a>
        <a className="menu-item" href="/EventsBoard">
          Education board 
        </a>
        <br></br>
        <a> Your Societies </a>

        {listSocieties.map((value, key) => {

          return (
            
            <li onClick={()=>changeToSoc(value._id, value.name)} style={st} key={key}  >{value.name}</li>
          )
        })}
      </Menu>
    </>
  );
}
export default Sidebar;
